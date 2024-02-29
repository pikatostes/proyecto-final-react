import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Usuario registrado exitosamente.');
        // Puedes redirigir o realizar otras acciones después del registro exitoso
      } else {
        console.error('Error al registrar usuario.');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div>
        <h2>Alta de Usuario</h2>
        <p>Completa el formulario a continuación para registrarte y unirte a nuestra comunidad de jugadores de Borderlands.</p>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre de usuario"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Register;
