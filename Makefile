.PHONY: help build up down seed test

help:
	@echo "VMware Migration Playbook - Management Commands"
	@echo "----------------------------------------------"
	@echo "build     : Build all containers"
	@echo "up        : Start all services"
	@echo "down      : Stop all services"
	@echo "assess    : Run VMware workload assessment"
	@echo "plan      : Generate migration wave plan"
	@echo "test      : Run system validation tests"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

assess:
	python scripts/assess/inventory_vms.py

plan:
	python scripts/assess/generate_plan.py

test:
	pytest tests/
