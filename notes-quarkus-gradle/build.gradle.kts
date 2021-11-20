plugins {
    kotlin("jvm") version "1.5.31"
    kotlin("plugin.allopen") version "1.5.31"
    id("io.quarkus")
}

repositories {
    mavenCentral()
    mavenLocal()
}

val quarkusPlatformGroupId: String by project
val quarkusPlatformArtifactId: String by project
val quarkusPlatformVersion: String by project

dependencies {
    implementation(enforcedPlatform("${quarkusPlatformGroupId}:${quarkusPlatformArtifactId}:${quarkusPlatformVersion}"))

    implementation("io.quarkus:quarkus-resteasy-reactive-jackson:2.4.1.Final")
    implementation("io.quarkus:quarkus-hibernate-reactive-panache:2.4.1.Final")
    implementation("io.quarkus:quarkus-hibernate-orm-panache-kotlin:2.4.1.Final")
    implementation("io.quarkus:quarkus-resteasy-reactive:2.4.1.Final")
    implementation("io.quarkus:quarkus-kotlin:2.4.1.Final")
    implementation("io.quarkus:quarkus-reactive-pg-client:2.4.1.Final")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("io.quarkus:quarkus-arc:2.4.1.Final")
    implementation("io.quarkus:quarkus-config-yaml:2.4.1.Final")

    testImplementation("io.quarkus:quarkus-junit5:2.4.1.Final")
    testImplementation("io.rest-assured:rest-assured:4.4.0")
}

group = "de.rockyj"
version = "1.0.0-SNAPSHOT"

java {
    sourceCompatibility = JavaVersion.VERSION_11
    targetCompatibility = JavaVersion.VERSION_11
}

allOpen {
    annotation("javax.ws.rs.Path")
    annotation("javax.enterprise.context.ApplicationScoped")
    annotation("io.quarkus.test.junit.QuarkusTest")
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions.jvmTarget = JavaVersion.VERSION_11.toString()
    kotlinOptions.javaParameters = true
}
