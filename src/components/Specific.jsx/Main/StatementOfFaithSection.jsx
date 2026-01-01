import React from "react";

const StatementOfFaithSection = () => {
  return (
    // <section className="section theme-bg-dark statementoffaith-section">
    <section
      className="section statementoffaith-section"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/statement-faith.jpg)`
      }}
    >

      <h2 className="heading">Statement of faith</h2>
      <ol>
        <li>
          We believe in the Scripture of the Old and New Testaments, as verbally
          inspired by God, inerrant in the original writings, and that they are
          of supreme and final authority in faith and life
        </li>
        <li>
          We believe in one God, eternally existing in three persons; Father,
          Son and Holy Spirit
        </li>
        <li>
          We believe that Jesus Christ was begotten by the Holy Spirit and born
          of the Virgin Mary, and is true God and true man
        </li>
        <li>
          We believe that man was created in the image of God; that he sinned,
          and thereby incurred not only physical death, but also spiritual
          death, which is separation from God; and that all human beings are
          born with a sinful nature, and in the case of those who reach moral
          responsibility, become sinners in thought, word and deed
        </li>
        <li>
          We believe that the Lord Jesus Christ died for our sins, according to
          the Scriptures, as a representative and substitutionary sacrifice, and
          that all who believe in Him are justified on the ground of His shed
          blood
        </li>
        <li>
          We believe in the resurrection of the crucified body of our Lord, in
          His ascension into Heaven, in His present life there for us as High
          Priest and Advocate
        </li>
        <li>
          We believe in the blessed hope, the personal imminent return of our
          Lord and Savior Jesus Christ
        </li>
      </ol>
    </section>
  );
};

export default StatementOfFaithSection;
