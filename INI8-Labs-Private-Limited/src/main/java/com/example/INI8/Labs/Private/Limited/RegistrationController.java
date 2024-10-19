package com.example.INI8.Labs.Private.Limited;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/registrations")
@CrossOrigin(origins = "http://localhost:5500")
public class RegistrationController {

    @Autowired
    private RegistrationService service;

    @GetMapping("/get-list")
    public List<Registration> getAllRegistrations() {
        return service.getAllRegistrations();
    }

    @GetMapping("/get/{id}")
    public Registration getRegistrationById(@PathVariable Long id) {
        return service.getRegistrationById(id);
    }

    @PostMapping("/add")
    public Registration createRegistration(@RequestBody Registration registration) {
        return service.createRegistration(registration);
    }

    @PutMapping("/update/{id}")
    public Registration updateRegistration(@PathVariable Long id, @RequestBody Registration registration) {
        return service.updateRegistration(id, registration);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteRegistration(@PathVariable Long id) {
        service.deleteRegistration(id);
        return ResponseEntity.ok("Registration deleted successfully.");
    }
}
