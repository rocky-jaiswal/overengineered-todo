package de.rockyj.repositories

import io.quarkus.hibernate.reactive.panache.PanacheRepository
import javax.enterprise.context.ApplicationScoped

import de.rockyj.models.User

@ApplicationScoped
class UserRepository: PanacheRepository<User>