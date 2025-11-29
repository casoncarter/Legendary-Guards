// Nav highlighting on click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Skill tabs – swap left card content
const skillContent = {
  dribbling: {
    title: "Dribbling — Pace, Control & Deception",
    subtitle: "Ball-Handling Package",
    intro:
      "Blend Curry’s pace changes, Murray’s hesitation, Nash’s probes, Jason Williams’ creativity, Trae’s shield dribble, and Wojo’s low stance to build a complete handle.",
    chips: [
      "Steph Curry – Float Dribble",
      "Jamal Murray – Hang Hesitation",
      "Jason Williams – Creative Handles",
      "Steve Nash – Continuous Probe",
      "Trae Young – Trailing Dribble",
      "Wojo – Low Stance Control",
    ],
    teaching: [
      "Float dribble (Curry): small hang to read the defender before changing speed.",
      "Hang hesitation to attack (Murray): sell the pause, then explode into a long stride.",
      "Live-dribble passing (Jason Williams): every dribble is a threat to deliver a pass.",
      "Continuous probe (Nash): keep the dribble alive under the rim, never panic pick-ups.",
      "Shield & trailing dribble (Trae): keep the ball behind your body vs pressure.",
      "Low stance (Wojo): hips low, chest up, ball below the knee in traffic.",
    ],
    drills: [
      "Two-Ball Pound + Float – one ball low & hard, the other floats at hip height.",
      "Hang Hesitation Cone Series – at each cone, sell a pause then attack downhill.",
      "Continuous Paint Dribble – circle the lane 8–10 seconds without picking up.",
      "Shield Dribble vs Pad – have a partner bump you while you protect the ball.",
      "Mirror Low-Stance Dribble – partner moves laterally, you mirror while dribbling.",
    ],
  },
  shooting: {
    title: "Shooting — Range, Balance & Game Shots",
    subtitle: "Shot-Making Package",
    intro:
      "Take elements from Curry’s quick release, Murray’s stop-balance midrange, Trae’s floater and deep range, and Nash’s off-balance finishes.",
    chips: [
      "Steph Curry – Quick Release",
      "Jamal Murray – Midrange Stops",
      "Trae Young – Floaters & Deep 3s",
      "Steve Nash – Runners & Scoops",
    ],
    teaching: [
      "Foot prep (Curry): be ready to shoot before you catch the ball.",
      "Hard stops (Murray): use 2-foot or stride stops to get balanced in tight spaces.",
      "Touch floaters (Trae): soft release and high arc from different distances.",
      "One-motion form (Curry): smooth rise from pocket to release.",
      "Wrong-foot finishes (Nash): finish before help arrives by stepping off the 'wrong' foot.",
    ],
    drills: [
      "Relocation Series – pass, relocate to corner or wing, catch & shoot.",
      "Pacer Drill – vary speed (slow-fast-slow) into each jumper.",
      "5-Spot Floater Ladder – short, mid, and long floaters from each elbow and hash.",
      "Range Extension – shoot deep 3s with the same form you use at the line.",
      "Runner / Nash Finish Series – 10 reps each side, wrong-foot and high glass.",
    ],
  },
  passing: {
    title: "Passing — Vision, Angles & Creativity",
    subtitle: "Playmaking Package",
    intro:
      "Blend Nash’s vision, Jason Williams’ creativity, Trae’s lob timing, and Curry’s gravity skip passes.",
    chips: [
      "Steve Nash – Angles & Vision",
      "Jason Williams – Flair & Deception",
      "Trae Young – Lob Passing",
      "Steph Curry – Skip Passes vs Help",
    ],
    teaching: [
      "See two passes ahead (Nash): read both the roller and the weak-side shooter.",
      "Deception (Jason Williams): use your eyes and body to mislead defenders.",
      "Lob timing (Trae): throw it where only your big can get it, just as they jump.",
      "Skip vs pocket (Curry): choose between hitting the roller or skipping to the weak side based on help.",
    ],
    drills: [
      "Look-Off Passing – stare at one target while hitting another.",
      "Moving Target Passing – partner jogs; you hit them in stride with chest and bounce passes.",
      "Lob Window Drill – partner jumps from the dotted line; you must float the ball above help.",
      "PnR Pocket Pass – use chairs or cones to rep threading the needle to the roller.",
    ],
  },
  movement: {
    title: "Movement Without the Ball — Cuts, Screens & Relocation",
    subtitle: "Off-Ball Package",
    intro:
      "Move like Curry, Nash, and Jason Williams: constant relocation, smart cuts, and spacing.",
    chips: [
      "Steph Curry – Relocation",
      "Steve Nash – Cut-After-Pass",
      "Jason Williams – Random Movement",
    ],
    teaching: [
      "Pass & relocate (Curry): never stand after you pass. Fill a new window.",
      "Cut-after-pass (Nash): sprint into space, don’t drift.",
      "Timing with drivers (Jason Williams): cut behind defenders who turn their head.",
      "Use screens away from the ball: flare, curl, and back screen options.",
    ],
    drills: [
      "3-Player Movement Wheel – pass, cut, fill an open spot.",
      "Relocate After Every Shot – no standing on makes or misses.",
      "Read-the-Tagger Drill – if help drops, cut behind their head for a layup.",
      "Screen & Slip – set a screen then slip out when defenders overplay.",
    ],
  },
  defense: {
    title: "Defense — Pressure, Stance & IQ",
    subtitle: "Two-Way Guard Package",
    intro:
      "Take Gary Payton’s pressure, Wojo’s stance and charge-taking, and Curry’s off-ball IQ.",
    chips: [
      "Gary Payton – On-Ball Pressure",
      "Wojo – Stance & Charges",
      "Steph Curry – Off-Ball Anticipation",
      "Trae Young – Passing Lanes",
    ],
    teaching: [
      "Force to the weak hand (Payton) and cut off angles instead of reaching.",
      "Low, strong base (Wojo): chest up, hands active, no straight legs.",
      "Jump to the ball early (Curry): be in help before the pass is thrown.",
      "Read passing lanes (Trae): anticipate when ball-handlers stare down passes.",
    ],
    drills: [
      "Shadow Slide Drill – mirror a partner without crossing your feet.",
      "Closeout-Slide-Recover Circuit – contest, slide, then sprint to next spot.",
      "Screen Navigation with Chairs – practice going under, over, and through screens.",
      "Deflection Game – 30-second bursts trying to tip as many passes as possible.",
    ],
  },
  pnr: {
    title: "Pick & Roll Mastery — Reads & Counters",
    subtitle: "Game Control Package",
    intro:
      "Run PnR like Curry, Murray, Nash, and Trae: pace changes, snake dribbles, and layered reads.",
    chips: [
      "Jamal Murray – Snake Dribble",
      "Trae Young – Floater & Lob",
      "Steve Nash – Pocket Pass",
      "Steph Curry – Pull-Up Threat",
    ],
    teaching: [
      "Use pace (Curry/Murray): slow to the screen, fast off of it.",
      "Snake dribble (Murray): cross back over the screen to keep defenders on your back.",
      "Manipulate the big (Nash): make them choose between you and the roller.",
      "Read the tag defender (Trae): if tag steps in, skip to the corner.",
    ],
    drills: [
      "PnR Reads with 3 Defenders – on-ball, big, and tagger.",
      "Snake Ladder – weave around cones after the screen to keep your defender behind.",
      "Floater or Lob Drill – choose between short floater and lob to roller.",
      "Pull-Up or Pocket – take a 3 if the big drops, hit the pocket if they step up.",
    ],
  },
};

function renderSkill(skillKey) {
  const data = skillContent[skillKey];
  const container = document.getElementById("skillDetail");
  if (!data || !container) return;

  const chipsHtml = data.chips.map((c) => `<div class="chip">${c}</div>`).join("");
  const teachingHtml = data.teaching.map((t) => `<li>${t}</li>`).join("");
  const drillsHtml = data.drills.map((d) => `<li>${d}</li>`).join("");

  container.innerHTML = `
    <small>${data.subtitle}</small>
    <h3>${data.title}</h3>
    <p>${data.intro}</p>
    <div class="chip-row">${chipsHtml}</div>
    <h4 style="font-size:0.85rem;margin:0.4rem 0;">Key Teaching Points</h4>
    <ul>${teachingHtml}</ul>
    <h4 style="font-size:0.85rem;margin:0.6rem 0 0.2rem;">Drill Menu</h4>
    <ul>${drillsHtml}</ul>
  `;
}

document.querySelectorAll(".skill-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".skill-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const key = tab.getAttribute("data-skill");
    renderSkill(key);
  });
});
