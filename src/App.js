import "./styles.css";
import Card from "./Card";
import data from "./Data";
import logoR from "./assets/logoR.svg";
import { useState } from "react";
export default function App() {
  const [properties, setProperties] = useState(data.properties);
  const [property, setProperty] = useState(properties[0]);
  function nextProperty() {
    const index = property.index + 1;
    setProperty(properties[index]);
  }
  function prevProperty() {
    const index = property.index - 1;
    setProperty(properties[index]);
  }
  return (
    <div className="App">
      <button
        onClick={() => nextProperty()}
        disabled={property.index === data.properties.length - 1}
      >
        Next
      </button>
      <button onClick={() => prevProperty()} disabled={property.index === 0}>
        Prev
      </button>

      <div className="page">
        <section>
          <img src={logoR} className="App-logo" alt="logo" />
          <h1>Image slideshow React tutorial.</h1>
        </section>

        <div className="col">
          <div className={`cards-slider active-slide-${property.index}`}>
            <div
              className="cards-slider-wrapper"
              style={{
                transform: `translateX(-${
                  property.index * (100 / properties.length)
                }%)`
              }}
            >
              {properties.map((property) => (
                <div>
                  <Card key={property._id} property={property} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
