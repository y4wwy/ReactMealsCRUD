import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>En Lezzetli Yemekler Sizlere Teslim Edilir</h2>
      <p>
        Mevcut geniş yemek seçeneklerimizden en sevdiğiniz yemeği seçin ve evde
        lezzetli bir öğle veya akşam yemeğinin tadını çıkarın.
      </p>
      <p>
        Tüm yemeklerimiz yüksek kaliteli malzemelerle, tam zamanında ve tabii ki
        deneyimli şefler tarafından!
      </p>
    </section>
  );
};

export default MealsSummary;
