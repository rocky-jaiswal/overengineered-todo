#!/bin/sh

read_var_from_env() {
    cat .env | grep $1= | cut -d '=' -f2
}

PWD=`pwd`
SQL_DIR="$PWD/migrations/sql"

DB_USER=$(read_var_from_env DB_USER)
DB_PASSWORD=$(read_var_from_env DB_PASSWORD)
DB_URL="jdbc:$(read_var_from_env DB_URL)"

docker run --rm --network=host -v ${SQL_DIR}:/flyway/sql flyway/flyway:8-alpine -user=${DB_USER} -password=${DB_PASSWORD} -url=${DB_URL} $1
