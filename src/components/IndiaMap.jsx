import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import '../css/IndiaMap.css';

const IndiaMap = ({ onStateSelect, region, setRegion }) => {
  const svgRef = useRef(null);
  const [selectedState, setSelectedState] = useState(null);  

  useEffect(() => {
    const renderMap = async () => {
      try {
        if (!svgRef.current) return;
        const response = await fetch('/map/india.json');
        const geoData = await response.json();

        const width = 100;
        const height = 350;

        const svg = d3.select(svgRef.current)
          .attr('width', '100%')
          .attr('height', height);

        svg.selectAll('*').remove(); // Clear any existing content

        const projection = d3.geoMercator()
          .center([45.9629, 23.5937]) // Center of India
          .scale(500)
          .translate([width / 2, height / 2]);

        const pathGenerator = d3.geoPath().projection(projection);

        const g = svg.append('g');

        const tooltip = d3.select('body')
          .append('div')
          .attr('class', 'tooltip')
          .style('position', 'absolute')
          .style('background-color', '#fff')
          .style('border', '1px solid #ccc')
          .style('padding', '5px')
          .style('border-radius', '4px')
          .style('visibility', 'hidden')
          .style('z-index', '1000');

        g.selectAll('path')
          .data(geoData.features)
          .enter()
          .append('path')
          .attr('d', pathGenerator)
          .attr('class', 'state')
          .style('fill', '#cbd5e0')
          .style('stroke', '#2d3748')
          .style('stroke-width', '0.5')
          .style('cursor', 'pointer')
          .on('mouseover', function(event, d) {
            if (d.properties.name !== selectedState) {
              d3.select(this).style('fill', '#4299e1');
            }

            tooltip
              .style('visibility', 'visible')
              .text(d.properties.name);

            const [x, y] = d3.pointer(event);

            tooltip
              .style('left', `${x + 10}px`)
              .style('top', `${y - 25}px`); 
          })
          .on('mouseout', function(event, d) {
            if (d.properties.name !== selectedState) {
              d3.select(this).style('fill', '#cbd5e0');
            }

            tooltip.style('visibility', 'hidden');
          })
          .on('click', function(event, d) {
            const clickedState = d.properties.name;
            if (clickedState === selectedState || clickedState === region) {
              onStateSelect(null);
              setSelectedState(null);
              setRegion(null);
            } else {
              setSelectedState(clickedState);
              onStateSelect(clickedState);
              setRegion(clickedState);
            }

            d3.select(this).style('fill', '#84181a');
          });

        g.selectAll('path')
          .style('fill', function(d) {
            return d.properties.name === selectedState ? '#84181a' : '#cbd5e0';
          });

      } catch (error) {
        console.error('Error loading or rendering map:', error);
      }
    };

    renderMap();
  }, [selectedState, onStateSelect, region, setRegion]);

  useEffect(() => {
    if (region) {
      setSelectedState(region);
    }
  }, [region]);

  return (
    <div className="mapContainer">
      <div className="mapBoxShadow">
        <svg 
          ref={svgRef}
          className="w-full"
          style={{ height: '100%', backgroundColor: '#ddddde3' }}
        />
      </div>
    </div>
  );
};

export default IndiaMap;
