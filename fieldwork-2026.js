(() => {
  const replaceText = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = node.textContent.replaceAll('Joseph Vargas', 'Luis Guzman Vargas');
    } else if (node.nodeType === Node.ELEMENT_NODE && !['SCRIPT','STYLE'].includes(node.tagName)) {
      [...node.childNodes].forEach(replaceText);
    }
  };
  replaceText(document.querySelector('main'));
  const css = document.createElement('style');
  css.textContent = `.heritage-photo{width:100%;height:260px;object-fit:cover;border-radius:9px}.heritage-photo-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:14px}.heritage-figure{margin:0}.heritage-figure figcaption{color:var(--muted);font-size:13px;padding:6px 0 14px}.heritage-note{border-left:3px solid var(--accent);padding-left:18px}`;
  document.head.append(css);
  const section = document.createElement('section');
  section.className='section'; section.id='fieldwork-2026';
  section.innerHTML=`
    <span class="eyebrow">Chapter 03B / Family fieldwork · October 2026</span>
    <h2>Names in stone. A cabin moved. Memory still here.</h2>
    <p>Two places in Hart connect the family's recollections to public history. These photographs were made by Bart Salazar. Inscriptions and local histories are evidence of commemoration and historical reporting; they do not by themselves prove a complete pedigree.</p>
    <article class="panel"><h3>Gus &amp; Jesse Pawneshing — remembered in Hart</h3>
      <figure class="heritage-figure"><img class="heritage-photo" style="height:auto;max-height:700px;object-fit:contain" src="assets/IMG_8959.jpg" alt="Photograph of the World War II names on a veterans memorial in downtown Hart, Michigan, including Gus and Jesse Pawneshing" loading="lazy"><figcaption>Veterans Park, downtown Hart, Michigan. Photograph: Bart Salazar, during a walk with Oliver, October 2026.</figcaption></figure>
      <p>Family testimony identifies Gus and Jesse Pawneshing as brothers of Alma Marie Pawneshing Vargas and sons of Anna Seaman Pawneshing. Their names appear in the World War II section of the memorial photographed at Veterans Park. <em>A History of Crystal Township</em> also lists Jesse and Gus Pawneshing among those killed in the war. The military branch, units, dates and circumstances of death, and burial locations remain to be verified against service and cemetery records.</p>
      <p><span class="pill">Photographed memorial</span> <span class="pill">Family-attested relationship</span> <span class="pill">Historical account</span></p>
    </article>
    <article class="panel" style="margin-top:18px"><h3>The Cobmoosa House — architecture and ancestry</h3>
      <div class="heritage-photo-grid">
        <figure class="heritage-figure"><img class="heritage-photo" src="assets/IMG_6694.jpg" alt="Cobmoosa cabin at Hart Historic District" loading="lazy"><figcaption>Historic cabin, Bart Salazar.</figcaption></figure>
        <figure class="heritage-figure"><img class="heritage-photo" src="assets/IMG_6692.jpg" alt="Another view of the historic cabin" loading="lazy"><figcaption>Architectural field photograph, Bart Salazar.</figcaption></figure>
        <figure class="heritage-figure"><img class="heritage-photo" src="assets/IMG_6681.jpg" alt="Historic district architectural documentation" loading="lazy"><figcaption>Historic district, Bart Salazar.</figcaption></figure>
        <figure class="heritage-figure"><img class="heritage-photo" src="assets/IMG_6682.jpg" alt="Historic district building detail" loading="lazy"><figcaption>Preservation details, Bart Salazar.</figcaption></figure>
      </div>
      <p>The building displayed at Hart's Historic District is identified as the Cobmoosa House, associated with an 1858 date. The family reports that the cabin was moved to the district as part of the preservation plan. Its exact original site, relocation date, and restoration history are not yet documented in this exhibition.</p>
      <p>Family testimony identifies Anna Seaman Pawneshing of Crystal Valley as the ancestor described in the township history. The historical text's reported great-niece relationship to Chief Cobmoosa is an important research lead; the intervening genealogical links remain to be demonstrated through original records. This exhibit does not infer tribal citizenship or enrollment.</p>
      <p class="heritage-note">Two complementary lenses: <strong>STILL HERE</strong> follows family memory and evidence; <strong>HART, IN MOTION</strong> explores the preserved building and its architecture.</p>
      <p><a href="https://www.migenweb.org/oceana/history/CrystalTwpHistory.pdf">Read the Crystal Township history</a></p>
    </article>
    <article class="panel" style="margin-top:18px"><h3>Fieldwork map</h3><p>These links identify public research locations, not ancestral home sites or proven burial plots.</p>
      <p><a href="https://www.google.com/maps/search/?api=1&query=Veterans+Park+Hart+Michigan">Veterans Park, Hart</a> · <a href="https://www.google.com/maps/search/?api=1&query=Hart+Historic+District+Michigan">Hart Historic District</a> · <a href="https://www.google.com/maps/search/?api=1&query=Crystal+Township+Oceana+County+Michigan">Crystal Township</a></p></article>`;
  const anchor=document.getElementById('casefiles');
  if(anchor) anchor.before(section); else document.querySelector('main').append(section);
  const nav=document.querySelector('header p:last-child');
  if(nav){nav.insertAdjacentHTML('beforeend',' &nbsp;·&nbsp; <a href="#fieldwork-2026">See the fieldwork</a>');}
})();