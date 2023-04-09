package com.example.todo.dto;

import com.example.todo.model.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
	private String token;
	private String email;
	private String username;
	private String password;
	private String id;
	

	public UserDTO(final UserEntity entity) {
		this.id = entity.getId();
		this.username = entity.getUsername();
		this.email = entity.getEmail();
		this.password = entity.getPassword();
	}
	public static UserEntity toEntity(final UserDTO dto) {
		return UserEntity.builder()
				.id(dto.getId())
				.username(dto.getUsername())
				.email(dto.getEmail())
				.password(dto.getPassword()).build();
	}
}
