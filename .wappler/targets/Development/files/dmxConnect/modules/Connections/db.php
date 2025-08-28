<?php
// Database Type : "PostgreSQL"
// Database Adapter : "postgres"
$exports = <<<'JSON'
{
    "name": "db",
    "module": "dbconnector",
    "action": "connect",
    "options": {
        "server": "postgres",
        "databaseType": "PostgreSQL",
        "connectionString": "pgsql:dbname=postgres;user=postgres.eqyafrpnfuwgessstuzc;password=@Baki025@;host=aws-0-sa-east-1.pooler.supabase.com;port=5432"
    }
}
JSON;
?>