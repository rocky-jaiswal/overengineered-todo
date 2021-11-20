package de.rockyj.models

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase

import javax.enterprise.context.ApplicationScoped
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name="users")
@ApplicationScoped
class User : PanacheEntityBase() {
    @Id
    val id: String? = null
    val name: String? = null
    val email: String? = null
}
