package com.example.backend.services.impl;

import com.example.backend.daos.PetDao;
import com.example.backend.models.PetModel;
import com.example.backend.services.PetService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class PetServiceImpl implements PetService {

    private final PetDao petDao;

    @Override
    public List<PetModel> findAll() {
        return petDao.findAll();
    }

    @Override
    public Optional<PetModel> findById(String id) {
        return petDao.findById(id);
    }

    @Override
    public List<PetModel> findByName(String name) {
        return petDao.findByNameContainingIgnoreCase(name);
    }

    @Override
    public void deleteById(String id) {
        petDao.deleteById(id);
    }

    @Override
    public PetModel save(PetModel petModel) {
        return petDao.save(petModel);
    }
}
