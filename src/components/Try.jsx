import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; 
import  logoIcon from '../assets/images/logo.png'
import '../css/Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Simulating a login API request
    setTimeout(() => {
      if (email === 'admin@gmail.com' && password === '1') {
        setSuccess('Login Successful!');
        navigate('/trends');
      } else {
        setError('Invalid email or password');
      }
    }, 2000); // Simulate network delay
  };

  return (
    <section className="login_bg">
      <Container fluid style={{ height: '100vh' }}>
        <Row className="justify-content-end align-items-center h-100 w-100">
          <Col xs={12} md={6} lg={3}>
            <Card className='login_box'>
              <Card.Body>
                <Card.Title className="text-center"> 
                  <div className='title_logo'>
                  <span><img src={logoIcon} alt="" className='img-fluid' srcset="" /></span>
                  </div>
                  </Card.Title>

                {/* Error and Success Alerts */}
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}

                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type={showPassword ? 'text' : 'password'} // Toggles between text and password
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pr-5" // Adjust padding for icon space
                      />
                      <span
                        className="position-absolute top-50 end-0 translate-middle-y me-2"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </span>
                    </div>
                  </Form.Group>

                  <div className="text-center mt-4">
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginPage;
