import pgPromise from "pg-promise";

export const db = new pgPromise()(
  "postgres://postgres:Fingerskate1@localhost:5432/api-team1"
);

const startDb = async () => {
  try {
    await db.none(`
            DROP TABLE IF EXISTS animali;
            CREATE TABLE animali (
            id SERIAL NOT NULL,
            nome TEXT NOT NULL,
            caratteristiche TEXT[],
            abilita_speciali TEXT NOT NULL,
            hp INTEGER NOT NULL,
            attacco INTEGER NOT NULL
            )
            `);

    await db.none(`INSERT INTO animali (nome, caratteristiche, abilita_speciali, hp, attacco) VALUES(
                'cane', 
                ARRAY['affettuoso', 'versatile'],
                'intenerisce l avversario e impedisce di attaccare',
                100,
                20
                )`);

    await db.none(`INSERT INTO animali (nome, caratteristiche, abilita_speciali, hp, attacco) VALUES(
                    'gatto', 
                    ARRAY['indipendente', 'agile', 'curioso'],
                    'evita gli attacchi e sorprende con agilità',
                    80,
                    15
                )`);
    await db.none(`INSERT INTO animali (nome, caratteristiche, abilita_speciali, hp, attacco) VALUES(
                    'elefante', 
                    ARRAY['forte', 'saggio', 'resistente'],
                    'carica l avversario con la proboscide e aumenta la propria difesa',
                    200,
                    40
                )`);
    await db.none(`INSERT INTO animali (nome, caratteristiche, abilita_speciali, hp, attacco) VALUES(
                    'leone', 
                    ARRAY['coraggioso', 'maestoso', 'predatore'],
                    'ruggito che spaventa gli avversari e aumenta lattacco',
                    150,
                    50
                )`);

    console.log("tabella creata correttamente");
  } catch (error) {
    console.error(error.message);
  }
};

