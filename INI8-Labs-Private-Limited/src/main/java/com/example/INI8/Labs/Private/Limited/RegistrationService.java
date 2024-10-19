package com.example.INI8.Labs.Private.Limited;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository repository;

    public List<Registration> getAllRegistrations() {
        return repository.findAll();
    }

    public Registration getRegistrationById(Long id) {
        return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Registration not found"));
    }

    public Registration createRegistration(Registration registration) {
        return repository.save(registration);
    }

    public Registration updateRegistration(Long id, Registration updatedRegistration) {
        Registration registration = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Registration not found"));
        registration.setName(updatedRegistration.getName());
        registration.setEmail(updatedRegistration.getEmail());
        registration.setDob(updatedRegistration.getDob());
        registration.setPhone(updatedRegistration.getPhone());
        registration.setAddress(updatedRegistration.getAddress());
        return repository.save(registration);
    }

    public void deleteRegistration(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Registration not found with id: " + id);
        }
    }
}
