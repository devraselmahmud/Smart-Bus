package com.cityzone.repository;

import com.cityzone.entities.StudentInfo;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentInfoRepository extends JpaRepository<StudentInfo, Long> {

  boolean existsByStudentId(String studentId);

}
