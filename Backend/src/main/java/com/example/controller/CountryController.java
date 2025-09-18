package com.example.controller;

import com.example.entity.Country;
import com.example.repository.CountryRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/countries")
public class CountryController {
    private final CountryRepository repo;

    public CountryController(CountryRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Country> findAll() { return repo.findAll(); }

    @PostMapping
    public Country save(@RequestBody Country country) { return repo.save(country); }

    @PostMapping("/{id}")
    public ResponseEntity<Country> findById(@PathVariable Long id, @RequestBody Country updated) {
        return repo.findById(id).map(c -> {
            c.setName(updated.getName());
            c.setCountryCode(updated.getCountryCode());
            c.setTelCode(updated.getTelCode());
            repo.save(c);
            return ResponseEntity.ok(c);
        }).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Country> update(@PathVariable Long id, @RequestBody Country country) {
        return repo.findById(id).map(c -> {
            c.setName(country.getName());
            c.setCountryCode(country.getCountryCode());
            c.setTelCode(country.getTelCode());
            repo.save(c);
            return ResponseEntity.ok(c);
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
