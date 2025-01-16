 const map_data = {
    "India": "IN",
    "Tamil Nadu": "IN-TN",
    "Karnataka": "IN-KA",
    "Andhra Pradesh": "IN-AP",
    "Telangana": "IN-TG",
    "Delhi": "IN-DL",
    "Maharashtra": "IN-MH",
    "West Bengal": "IN-WB",
    "Uttar Pradesh": "IN-UP",
    "Kerala": "IN-KL",
    "Rajasthan": "IN-RJ",
    "Gujarat": "IN-GJ",
    "Punjab": "IN-PB",
    "Haryana": "IN-HR",
    "Bihar": "IN-BR",
    "Madhya Pradesh": "IN-MP",
    "Chhattisgarh": "IN-CT",
    "Orissa": "IN-OR",
    "Assam": "IN-AS",
    "Jharkhand": "IN-JH",
    "Himachal Pradesh": "IN-HP",
    "Uttarakhand": "IN-UT",
     "Uttaranchal": "IN-UT",
    "Goa": "IN-GA",
    "Jammu and Kashmir": "IN-JK",
    "Ladakh": "IN-JK",
    "Tripura": "IN-TR",
    "Meghalaya": "IN-ML",
    "Manipur": "IN-MN",
    "Nagaland": "IN-NL",
    "Arunachal Pradesh": "IN-AR",
    "Mizoram": "IN-MZ",
    "Sikkim": "IN-SK"
};
  


import React, { useState } from 'react';
import { Card, Button, Form, Spinner } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TrendingBtn } from './TrendingBtn';
import '../css/Summarize.css'

const SummarizeNews = () => {
  const [url, setUrl] = useState('');
  const [language, setLanguage] = useState('Tamil');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const languages = [
    'Tamil',
    'English',
    'Hindi',
    'Telugu',
    'Kannada',
    'Malayalam',
    'Bengali',
    'Marathi',
    'Gujarati'
  ];

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setSummary('');
      
      const response = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, language }),
      });

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      setSummary('Error fetching summary. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div className="trendingTitle">
            <h1>Multilingual News Summarizer</h1>
            <p>Enter a News Site URL and select a language to generate a 200-word summary.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <div className='summaryBox'>
            <div className="mb-3">
              <Form.Label className="text-sm font-medium">News Article URL</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter news article URL here..."
              />
            </div>
            <div className="mb-3">
              <Form.Label className="text-sm font-medium">Select Language</Form.Label>
              <Form.Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
                          </Form.Select>                   
                      </div>

                  </div>
                  <div>
                        <TrendingBtn onSubmit={handleSubmit}/> 
                  </div>
        </Col>
        <Col xs={12} md={6}>
          <div>
                      <div className="mt-3">
                          <div className='summaryBox'>
                               <Form.Label className="text-sm font-medium">Summary</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                value={summary}
                readOnly
              />
                          </div>      
             
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SummarizeNews;
