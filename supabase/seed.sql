-- Logistics Gurukul — sample job openings.
-- Run after schema.sql. Idempotent: ON CONFLICT (slug) skips existing rows.

insert into public.jobs (
  slug, title, department, location, employment_type, experience,
  apply_email, apply_deadline, "order", draft, description
) values (
  'logistics-operations-trainer',
  'Logistics Operations Trainer',
  'Training',
  'Kochi, Kerala',
  'Full-time',
  '3–5 years',
  'careers@logisticsgurukul.com',
  null,
  10,
  false,
  $$<p>Logistics Gurukul is hiring a <strong>Logistics Operations Trainer</strong> to lead classroom and lab sessions for our diploma and short-term courses. You'll mentor the next generation of supply-chain professionals while staying close to industry practice.</p>
<h3>What you'll do</h3>
<ul>
  <li>Deliver engaging sessions on freight forwarding, warehousing, customs, and port operations.</li>
  <li>Design course content, case studies, and assessments aligned with current industry standards.</li>
  <li>Mentor students through projects, internships, and placement preparation.</li>
  <li>Collaborate with industry partners on guest lectures and live exposure visits.</li>
</ul>
<h3>What we're looking for</h3>
<ul>
  <li>3–5 years of hands-on logistics / supply-chain experience (forwarder, NVOCC, 3PL, or shipping line).</li>
  <li>Strong communication skills in English; Malayalam or Hindi is a plus.</li>
  <li>Comfort with classroom delivery — prior teaching experience preferred but not required.</li>
  <li>A degree in logistics, commerce, or a related field.</li>
</ul>
<h3>Why join us</h3>
<ul>
  <li>Shape careers in a growing industry while staying connected to operations.</li>
  <li>Modern campus in Edappally, Kochi with active industry tie-ups.</li>
  <li>Supportive team and clear growth path into senior trainer / curriculum lead roles.</li>
</ul>
<p>Send your CV along with a short note about a teaching topic you'd love to deliver.</p>$$
)
on conflict (slug) do nothing;
