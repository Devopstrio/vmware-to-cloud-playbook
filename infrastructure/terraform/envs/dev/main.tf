module "migration_network" {
  source = "./modules/networking"

  vpc_cidr = "10.30.0.0/16"
}

module "migration_target_k8s" {
  source = "./modules/compute"

  cluster_name = "migration-target-cluster"
  node_count   = 5
}

module "migration_metadata_db" {
  source = "./modules/database"

  engine_version = "15.4"
}

resource "kubernetes_namespace" "mig_ops" {
  metadata {
    name = "vmware-to-cloud-playbook"
  }
}

resource "aws_direct_connect_gateway" "mig_tunnel" {
  name            = "migration-factory-tunnel"
  amazon_side_asn = "64512"
}

resource "aws_s3_bucket" "migration_artifacts" {
  bucket = "vmware-migration-artifacts-global"
}
