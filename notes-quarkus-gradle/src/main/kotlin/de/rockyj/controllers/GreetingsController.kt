package de.rockyj.controllers

import io.smallrye.common.annotation.NonBlocking

import javax.enterprise.context.ApplicationScoped
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType

@Path("/hello")
@ApplicationScoped
class GreetingsController {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @NonBlocking
    fun hello() = "Hello World!"

}