package com.springreact.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springreact.project.models.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
