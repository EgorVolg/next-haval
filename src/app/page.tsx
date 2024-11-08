import React from "react";
import "./Home.scss";
 
import { brands, capacity, equipment } from "@/app/data.json"
import Filter from "@/components/shared/Filter/Filter";
import Button from "@/components/UI/Button/Button";
import { CarList } from "@/components/shared/Carlist/CarList";
 
export default function Home() {
  return (
    <section className="home">
      <header className="home__header">
        <h1>Автомобили Chery в СПб</h1>
      </header>
      <main className="home__main">
        <aside className="home__nav-content">
          <nav className="home__nav">
            <h1>Бренд</h1>
            <Filter props={brands} />
          </nav>
          <nav className="home__nav">
            <h1>Объем двигателя</h1>
            <Filter props={capacity} />
          </nav>
          <nav className="home__nav">
            <h1>Комплектация</h1>
            <Filter props={equipment} />
          </nav>
          <nav className="home__nav-button">
            <Button title="Сбросить фильтр" />
          </nav>
        </aside>
        <aside className="home__car-list">
          <CarList />
        </aside>
      </main>
    </section>
  );
}
