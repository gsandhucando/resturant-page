import React from "react";
import Style from "../components/css/Menu.module.css";


let FoodMeanu = props => {
  return (
    <div className={Style.menuContainer}>
      <h3>SPRING 2019 | FOOD INSPIRED BY THE ISLANDS OF THAILAND</h3>

      <div>
        <p className={Style.bold}>หอยนางรมในนํ้าซุป</p>
        <p className={Style.bold}>HOY NANG ROM NAI NAAM SOUP</p>
        <p style={{fontStyle: 'italic'}}>
          Totten Inlet oyster, black caviar, fried shallot, aromatic broth,
          herbs
        </p>
      </div>
      <div>
        <p className={Style.bold}>ขนมครก</p>
        <p className={Style.bold}>KANOM KROK</p>
        <p style={{fontStyle: 'italic'}}>
          Scallop, galangal, coconut cream, lemongrass, lime leaf, crispy rice
          cup
        </p>
      </div>
      <div>
        <p className={Style.bold}>ไข่ตุ๋นปู</p>
        <p className={Style.bold}>KHAI THOON PUU</p>
        <p style={{fontStyle: 'italic'}}>
          Egg custard, dungeness crab, fried enoki, garlic oil, shallot Migot
          Brut Rosé Methode Traditionelle, Gamay, Moselle, FR
        </p>
      </div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <div>
        <p className={Style.bold}>ก๋วยเต๋ียวเรือ</p>
        <p className={Style.bold}>GUAY TIEW RUAR</p>
        <p style={{fontStyle: 'italic'}}>
          Rice noodle, pork collar, pork ball, pork blood, crispy pig ear
          Oltretorrente Colli Tortonesi Rosso, Dolcetto/Barbera, Piedmont, IT
          2017
        </p>
      </div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <div>
        <p className={Style.bold}>พล่าปลากะพง</p>
        <p className={Style.bold}>PRA PLAA GA-PONG</p>
        <p style={{fontStyle: 'italic'}}>
          Tai snapper, ramps, wild onions, nettles, fried scales, nasturtium
        </p>
      </div>
      <div>
        <p className={Style.bold}>ข้าวยํา</p>
        <p className={Style.bold}>YUM GAE YANG</p>
        <p style={{fontStyle: 'italic'}}>
          Rice medley, red curry rice crumble, ikura, tobiko, sepia rice chips,
          preserved duck egg yolks Toreta Pošip, Korčula, CRO 2016
        </p>
      </div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <div>
        <p className={Style.bold}>แกงเขียวหวานเน้ือตุ๋น</p>
        <p className={Style.bold}>GANG KIEW WAAN NEAU</p>
        <p style={{fontStyle: 'italic'}}>
          Green curry, beef brisket, fresno, grachai, thai basil, lime leaves
        </p>
      </div>
      <div>
        <p className={Style.bold}>แสร้งว่ากุ้ง ปลาฟู</p>
        <p className={Style.bold}>SRANG WAH GOONG PLAA FOO</p>
        <p style={{fontStyle: 'italic'}}>
          Relish of kauai prawns, lime leaf, lemongrass, shallot, mint,
          cilantro, catfish plaa duk foo
        </p>
      </div>
      <div>
        <p className={Style.bold}>ไก่กอและ</p>
        <p className={Style.bold}>GAI GO-LAC</p>
        <p style={{fontStyle: 'italic'}}>
          Pheasant skewer, go-lae curry, charcoal oil, toasted rice powder,
          pickles
        </p>
      </div>
      <div>
        <p className={Style.bold}>ข้าวผัดแฮม</p>
        <p className={Style.bold}>KHAO PAD HAM</p>
        <p style={{fontStyle: 'italic'}}>
          Fried rice with pork terrine and soft boiled egg Hofgut Falkenstein
          ‘Krettnacher Euchariusberg’, Riesling Kabinett, Mosel, GER 2017
        </p>
      </div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <div>
        <p className={Style.bold}>เค้กแครอท ไอศครีมโยเกิร์ต</p>
        <p className={Style.bold}>RHUBARB CAKE</p>
        <p style={{fontStyle: 'italic'}}>
          Black sesame rhubarb cake, white chocolate coconut mousse, poached
          rhubarb, hibiscus meringue
        </p>
      </div>
      <div>
        <p className={Style.bold}>ขนมถ้วยเย็น</p>
        <p className={Style.bold}>KANOM TUAY YEN</p>
        <p style={{fontStyle: 'italic'}}>
          Avocado semifreddo, pandan coconut marshmallow, pineapple, water
          chestnut, herb ice Camin Larredya ‘Au Capceu’, Sud-Ouest, FR 2016
        </p>
      </div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <div>
        <p className={Style.bold}>WINE LIST</p>
        <a
          href="https://langbaanpdx.com/wp-content/uploads/2019/05/5.2.19-Langbaan-Wine-List.pdf"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank" rel="noopener"
        >
          <button className={Style.button}>VIEW LIST</button>
        </a>
        <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      </div>
      <div>
        <p>
          Chef de cuisine: Brandon Hirahara Chef team: Daniel Kim, Kitsanaruk
          Ketkuaviriyanot, Charles Wilson, Vedran Jordan
        </p>
        <p>
          Pastry Chef: Maya Erickson Service Team: Jenny, Cira, Kirk Wine
          Pairing: Dana Frank, Sommelier Cocktails: Jon Lewis
        </p>
        <p>
          ** Sorry, no substitutions. Many dishes contain fermented fish,
          shellfish, seafood, cilantro, red bell pepper and nuts, even when not
          listed. Please let us know if you have allergies or food
          sensitivities. Consuming raw/undercooked meats (cooked to order),
          poultry, seafood or egg may increase your risk of foodborne illness.
        </p>
      </div>
    </div>
  );
};

export default FoodMeanu;
