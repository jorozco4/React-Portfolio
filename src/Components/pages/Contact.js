import React from "react";

const styles = {
  card: {
    background: "#6a040f",
  },

  font: {
    color: "white",
  },
};

function Contact() {
  return (
    <section className="section" style={styles.card}>
      <h2 style={styles.font}>Contact</h2>
      <ul>
        <li style={styles.font}>Cell: 571-209-0572</li>
        <li style={styles.font}>Email: orozcojesse0@gmail.com</li>
        <li style={styles.font}>Github Username: jorozco4</li>
      </ul>
    </section>
  );
}

export default Contact;
