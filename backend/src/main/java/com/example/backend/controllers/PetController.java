package com.example.backend.controllers;

import com.example.backend.dtos.PetDto;
import com.example.backend.facades.PetFacade;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping("/pet")
public class PetController {

    private final PetFacade petFacade;

    @GetMapping("/all")
    public ResponseEntity<List<PetDto>> getAllPets() {
        return ResponseEntity.ok(petFacade.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PetDto> getPetById(@PathVariable String id) {
        return petFacade.findById(id)
                        .map(ResponseEntity::ok)
                        .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<List<PetDto>> getPetsByName(@PathVariable String name) {
        return ResponseEntity.ok(petFacade.findByName(name));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePetById(@PathVariable String id) {
        try {
            final Optional<PetDto> pet = petFacade.findById(id);

            if (pet.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            petFacade.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/new")
    public ResponseEntity<PetDto> createPet(@Valid @RequestBody PetDto petDto) {
        return ResponseEntity.ok(petFacade.save(petDto));
    }
}
