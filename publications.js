const ME = "<strong>A. Dash</strong>";
const ME_EQ = "<strong>A. Dash*</strong>";

const GROUPS = [
  { key: "patent", title: "Patent Application" },
  { key: "journal", title: "Journal Papers" },
  { key: "conference", title: "Conference Papers" },
  { key: "media", title: "Media Coverage" },
];

const PUBLICATIONS = [
  {
    type: "patent",
    topic: "music",
    label: "WIPO",
    title: "Algorithmic Music Generation System for Emotion Mediation and Method",
    authors: `K. Agres, C. Tan, P. Chua, ${ME}`,
    venue: "World Intellectual Property Organization, Patent WO 2024/117973 A1 (SG Patent Application No. 10202260229T)",
    year: 2024,
    tags: ["Music", "Emotion", "Patent"],
  },
  {
    type: "journal",
    topic: "emg",
    label: "IEEE JBHI",
    title: "Muscle Anatomy-aware Geometric Deep Learning for sEMG-based Gesture Decoding",
    authors: `${ME_EQ}, G. Zappoli*, L. Das, R. Riener`,
    venue: "arXiv preprint arXiv:2510.17660. Under review, IEEE Journal of Biomedical and Health Informatics",
    year: 2025,
    tags: ["sEMG", "Geometric Deep Learning", "Gesture Decoding", "Under review", "IF 7.7"],
    links: [{ kind: "arxiv", label: "arXiv", href: "https://arxiv.org/abs/2510.17660" }],
  },
  {
    type: "journal",
    topic: "vr",
    label: "IEEE Access",
    title: "AdaCue: A Virtual Reality-based Motor-cognitive Exergaming Platform with Assistive Hierarchical Cueing for Stroke Patients",
    authors: `S. M. Juloori*, ${ME_EQ}, A. Singh, A. K. Singh, S. S. Pandey, D. Kumar`,
    venue: "Under review, IEEE Access",
    year: 2026,
    tags: ["Virtual Reality", "Stroke", "Exergaming", "Under review", "IF 4.2"],
  },
  {
    type: "journal",
    topic: "music",
    label: "ACM CSUR",
    title: "AI-Based Affective Music Composition Systems: A Review of Methods, Challenges and Goals",
    authors: `${ME}, K. Agres`,
    venue: "ACM Computing Surveys, vol. 56, no. 11, pp. 1\u201334",
    year: 2024,
    tags: ["Generative AI", "Affective Music", "Review", "IF 30.4"],
  },
  {
    type: "journal",
    topic: "music",
    label: "Front. Psychol.",
    title: "AffectMachine-Classical: A Novel System for Generating Affective Classical Music",
    authors: `K. R. Agres*, ${ME_EQ}, P. Chua`,
    venue: "Frontiers in Psychology, 14, 1158172",
    year: 2023,
    tags: ["Generative AI", "Affective Music", "IF 4.2"],
  },
  {
    type: "journal",
    topic: "emg",
    label: "IEEE TNSRE",
    title: "Design of Virtual Reality-Enabled Surface Electromyogram-Triggered Grip Exercise Platform",
    authors: `${ME}, U. Lahiri`,
    venue: "IEEE Transactions on Neural Systems and Rehabilitation Engineering, pp. 1\u20139",
    year: 2019,
    tags: ["sEMG", "Virtual Reality", "Stroke", "IF 6.6"],
  },
  {
    type: "journal",
    topic: "emg",
    label: "NeuroRehab.",
    title: "Quantification of Grip Strength with Complexity Analysis of Surface Electromyogram for Hemiplegic Post-Stroke Patients",
    authors: `${ME}, A. Dutta, U. Lahiri`,
    venue: "NeuroRehabilitation, vol. 45, no. 1, pp. 45\u201356",
    year: 2019,
    tags: ["sEMG", "Stroke", "Signal Complexity", "IF 2.4"],
  },
  {
    type: "journal",
    topic: "vr",
    label: "Front. Neurosci.",
    title: "Kinect-assisted Performance-sensitive Upper Limb Exercise Platform for Post-stroke Survivors",
    authors: `${ME}, A. Yadav, A. Chauhan, U. Lahiri`,
    venue: "Frontiers in Neuroscience, vol. 13",
    year: 2019,
    tags: ["Motion Capture", "Stroke", "Rehabilitation", "IF 4.0"],
    links: [{ kind: "doi", label: "DOI", href: "https://doi.org/10.3389/fnins.2019.00228" }],
  },
  {
    type: "journal",
    topic: "stim",
    label: "Brain Sci.",
    title: "Deep Cerebellar Transcranial Direct Current Stimulation of the Dentate Nucleus to Facilitate Standing Balance in Chronic Stroke Survivors: A Pilot Study",
    authors: "Z. Rezaee et al.",
    venue: "Brain Sciences, vol. 10, no. 2, p. 94",
    year: 2020,
    tags: ["tDCS", "Stroke", "Balance", "IF 3.6"],
    links: [{ kind: "doi", label: "DOI", href: "https://doi.org/10.3390/brainsci10020094" }],
  },
  {
    type: "conference",
    topic: "music",
    label: "AAAI 2025",
    title: "A Retro-pop Music Generation System for Mood Mediation of People with Depression",
    authors: `K. R. Agres*, ${ME_EQ}, P. Chua`,
    venue: "AAAI Workshop on Artificial Intelligence, 39th AAAI Conference on Artificial Intelligence, Philadelphia, USA",
    year: 2025,
    tags: ["Generative AI", "Depression", "Core A*"],
  },
  {
    type: "conference",
    topic: "emg",
    label: "IEEE INDISCON",
    title: "Multimodal Bayesian Fusion for Decoding of Complex Grip Gestures",
    authors: `G. Ioana, R. Riener, ${ME}`,
    venue: "IEEE INDISCON",
    year: 2026,
    tags: ["Bayesian Fusion", "Gesture Decoding", "Accepted"],
  },
  {
    type: "conference",
    topic: "vr",
    label: "MetroXRAINE",
    title: "Design of a Virtual Reality-based Neuroadaptive System for Treatment of Arachnophobia",
    authors: `R. Weber*, ${ME_EQ}, S. C. Wriessnegger`,
    venue: "2024 IEEE International Conference on Metrology for eXtended Reality, Artificial Intelligence and Neural Engineering (MetroXRAINE), pp. 255\u2013259",
    year: 2024,
    tags: ["Virtual Reality", "Passive BCI", "Neuroadaptive"],
    links: [{ kind: "doi", label: "DOI", href: "https://doi.org/10.1109/metroxraine62247.2024.10796452" }],
  },
  {
    type: "conference",
    topic: "eeg",
    label: "BCI 2024",
    title: "Towards a Model-based Personalization Approach for Driving a BCI",
    authors: `${ME}, S. C. Wriessnegger`,
    venue: "9th Graz Brain-Computer Interface Conference: Join Forces \u2013 Increase Performance (BCI 2024), Verlag der Technischen Universit\u00e4t Graz",
    year: 2024,
    tags: ["EEG", "Brain-Computer Interface", "Personalization"],
  },
  {
    type: "conference",
    topic: "eeg",
    label: "Confluence",
    title: "Investigating the Effect of EEG Channel Selection on Inter-subject Emotion Classification",
    authors: `K. Sharma, ${ME}, D. Kumar`,
    venue: "13th Int. Conf. Cloud Computing, Data Science & Engineering (Confluence), Noida, India, pp. 312\u2013316",
    year: 2023,
    tags: ["EEG", "Emotion Classification"],
    links: [{ kind: "doi", label: "DOI", href: "https://doi.org/10.1109/Confluence56041.2023.1004885" }],
  },
  {
    type: "conference",
    topic: "vr",
    label: "IEEE BHI",
    title: "Physiology-sensitive Virtual Reality Based Strength Training Platform for Post-stroke Grip Task",
    authors: `${ME}, A. Yadav, U. Lahiri`,
    venue: "IEEE EMBS Int. Conf. Biomedical & Health Informatics (BHI), Chicago, USA, pp. 1\u20134",
    year: 2019,
    tags: ["Virtual Reality", "Stroke", "Physiological Sensing"],
    links: [{ kind: "doi", label: "DOI", href: "https://doi.org/10.1109/BHI.2019.8834642" }],
  },
  {
    type: "conference",
    topic: "vr",
    label: "IEEE/ACIS ICIS",
    title: "Design of a VR-based Upper Limb Gross Motor and Fine Motor Task Platform for Post-stroke Survivors",
    authors: `K. Saurav, ${ME}, D. Solanki, U. Lahiri`,
    venue: "17th IEEE/ACIS Int. Conf. Computer and Information Science (ICIS), Singapore, pp. 252\u2013257",
    year: 2018,
    tags: ["Virtual Reality", "Stroke", "Upper Limb"],
    links: [{ kind: "doi", label: "DOI", href: "https://doi.org/10.1109/ICIS.2018.8466538" }],
  },
  {
    type: "conference",
    topic: "hw",
    label: "SPIN 2015",
    title: "Design and Development of Low-cost EOG Acquisition Circuit for HMI Application",
    authors: `S. Kumar, ${ME}, M. K. Mukul`,
    venue: "2nd Int. Conf. Signal Processing and Integrated Networks (SPIN), Noida, India, pp. 192\u2013197",
    year: 2015,
    tags: ["EOG", "Hardware", "Human-Machine Interface"],
    links: [{ kind: "doi", label: "DOI", href: "https://doi.org/10.1109/SPIN.2015.7095398" }],
  },
  {
    type: "media",
    topic: "media",
    label: "Times of India",
    title: "Mind over body",
    authors: "",
    venue: "News article, The Times of India",
    year: 2018,
    tags: ["Media"],
    links: [{ kind: "news", label: "Article", href: "https://timesofindia.indiatimes.com/city/ahmedabad/mind-overbody/articleshow/66662782.cms" }],
  },
];

const STATUS_TAGS = new Set(["Under review", "Accepted", "Patent", "Review"]);

function plain(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent;
}

function citation(pub) {
  const authors = pub.authors ? `${plain(pub.authors)}. ` : "";
  return `${authors}"${pub.title}." ${pub.venue}, ${pub.year}.`;
}

function tagClass(tag, index) {
  if (/^IF /.test(tag) || tag === "Core A*") return "ptag ptag-gold";
  if (STATUS_TAGS.has(tag)) return "ptag ptag-amber";
  return index % 2 === 0 ? "ptag ptag-blue" : "ptag ptag-green";
}

function actionHtml(link) {
  return `<a class="act act-${link.kind}" href="${link.href}" target="_blank" rel="noopener" title="${link.label}" aria-label="${link.label}">${link.label}</a>`;
}

function renderPub(pub, index) {
  const thumbStyle = pub.image ? ` style="--thumb:url('${pub.image}')"` : "";
  const links = (pub.links || []).map(actionHtml).join("");
  const tags = pub.tags.map((t, i) => `<li class="${tagClass(t, i)}">${t}</li>`).join("");
  const authors = pub.authors ? `<p class="authors">${pub.authors}</p>` : "";

  return `
    <li class="pub" data-type="${pub.type}" data-index="${index}">
      <div class="pub-side">
        <div class="thumb thumb-${pub.topic}"${thumbStyle}><span>${pub.label}</span></div>
        <div class="actions">
          ${links}
          <button class="act act-cite" type="button" title="Copy citation" aria-label="Copy citation">&ldquo;</button>
        </div>
      </div>
      <div class="pub-body">
        <h4>${pub.title}</h4>
        ${authors}
        <p class="venue">${pub.venue}, ${pub.year}</p>
        <ul class="ptags">${tags}</ul>
      </div>
    </li>`;
}

function renderPublications() {
  const root = document.getElementById("pub-list");
  if (!root) return;

  root.innerHTML = GROUPS.map((group) => {
    const items = PUBLICATIONS.map((pub, index) => ({ pub, index })).filter(({ pub }) => pub.type === group.key);
    if (!items.length) return "";
    return `
      <div class="pub-group" data-group="${group.key}">
        <h3 class="group-title">${group.title} <span class="count">${items.length}</span></h3>
        <ul class="pubs">${items.map(({ pub, index }) => renderPub(pub, index)).join("")}</ul>
      </div>`;
  }).join("");

  root.addEventListener("click", async (event) => {
    const button = event.target.closest(".act-cite");
    if (!button) return;
    const pub = PUBLICATIONS[Number(button.closest(".pub").dataset.index)];
    try {
      await navigator.clipboard.writeText(citation(pub));
      button.classList.add("done");
      button.title = "Citation copied";
      setTimeout(() => {
        button.classList.remove("done");
        button.title = "Copy citation";
      }, 1500);
    } catch (error) {
      window.prompt("Copy citation:", citation(pub));
    }
  });
}

renderPublications();
