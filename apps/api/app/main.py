from fastapi import FastAPI, Body, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from core.strategy.engine import DiscoveryEngine, StrategyEngine, CostModeler, ExecutionEngine

app = FastAPI(title="VMware Migration Playbook API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

discovery = DiscoveryEngine()
strategy_engine = StrategyEngine()
cost_modeler = CostModeler()
execution = ExecutionEngine()

@app.get("/health")
def health():
    return {"status": "ok", "service": "vmware-migration-playbook"}

@app.get("/inventory")
def get_inventory():
    vms = discovery.scan_vcenter("https://vcenter.internal")
    inventory_with_strategies = []
    for vm in vms:
        vm["strategy"] = strategy_engine.recommend_strategy(vm)
        inventory_with_strategies.append(vm)
    return {"inventory": inventory_with_strategies}

@app.post("/strategy")
def evaluate_strategy(data: dict = Body(...)):
    vm_name = data.get("vm_name")
    rec = strategy_engine.recommend_strategy(data)
    return {"vm": vm_name, "recommended_strategy": rec}

@app.get("/reports")
def get_migration_reports():
    return {
        "summary": {
            "total_vms": 1450,
            "migrated": 342,
            "in_progress": 12,
            "remaining": 1096
        },
        "financials": cost_modeler.estimate_migration_cost(1450, 50000)
    }

@app.get("/metrics")
def get_system_metrics():
    return {
        "migration_velocity": 4.5, # VMs per day
        "data_transfer_rate_mbps": 850,
        "cutover_success_rate": 0.992
    }
