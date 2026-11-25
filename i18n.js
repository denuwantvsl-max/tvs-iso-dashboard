/*
 * English / Sinhala switch for the TVS ISO Dashboard. Loaded in the <head> of every page, after gate.js.
 * How it works: every piece of page text that exactly matches an English line in DICT below is swapped for its
 * Sinhala line. Anything not in DICT (equipment models, supplier names, document codes, dates) stays in English.
 * To add or fix a translation: add or edit a line "English text || Sinhala text" (the English must match the page
 * text exactly, with spaces squeezed). The choice is remembered on this browser.
 */
(function () {
  var KEY = 'isoLang';
  var DICT_TEXT = `
TVS Lanka · ISO 9001:2015 || TVS ලංකා · ISO 9001:2015
Vehicle Assembly Complex || වාහන එකලස් කිරීමේ සංකීර්ණය
Poruwadanda, Horana || පොරුවදණ්ඩ, හොරණ
Surveillance 2 — 21 Dec 2026 || අධීක්ෂණ විගණනය 2 — 2026 දෙසැ. 21
Dashboard || උපකරණ පුවරුව
Overview || සාරාංශය
Statutory Certificates || ව්‍යවස්ථාපිත සහතික
Factory Engineer Certs || කර්මාන්තශාලා ඉංජිනේරු සහතික
NCR Register || NCR ලේඛනය
MRM Records || MRM වාර්තා
Calibration || ක්‍රමාංකනය
Clause 4-9 QMS || 4-9 වගන්ති QMS
Audit History || විගණන ඉතිහාසය
Department Objectives || දෙපාර්තමේන්තු අරමුණු
Live Source || සජීවී මූලාශ්‍රය
ISO Dashboard Drive || ISO Dashboard Drive ෆෝල්ඩරය
ISO 9001:2015 Dashboard / || ISO 9001:2015 උපකරණ පුවරුව /
Live · Synced to Drive || සජීවී · Drive සමඟ සමමුහුර්තයි
TVS Lanka · Vehicle Assembly Complex || TVS ලංකා · වාහන එකලස් කිරීමේ සංකීර්ණය
ISO 9001:2015 Dashboard || ISO 9001:2015 උපකරණ පුවරුව
Live status for TVS Lanka's Quality Management System — certificates, NCRs, MRM tracking, and calibration, all linked directly to source documents in Google Drive. || TVS ලංකා තත්ත්ව කළමනාකරණ පද්ධතියේ සජීවී තත්ත්වය — සහතික, NCR, MRM පසුවිපරම සහ ක්‍රමාංකනය, සියල්ල Google Drive හි මුල් ලේඛනවලට සෘජුවම සම්බන්ධයි.
🎯 Surveillance 2 — 21 December 2026: focus on Procurement, Stores, Logistics and Sales || 🎯 අධීක්ෂණ විගණනය 2 — 2026 දෙසැම්බර් 21: ප්‍රසම්පාදනය, ගබඩාව, ප්‍රවාහනය සහ විකුණුම් කෙරෙහි අවධානය
Surveillance 1 (13-Oct-2025) audited System Management, Production, Quality & Transit, HR and Maintenance. The processes || අධීක්ෂණ විගණනය 1 (13-Oct-2025) මගින් පද්ධති කළමනාකරණය, නිෂ්පාදනය, තත්ත්වය සහ ප්‍රවාහනය, මානව සම්පත් සහ නඩත්තුව විගණනය කරන ලදී. පසුගිය වර
not || විගණනය නොකළ
audited last time are the most likely to be sampled now: || ක්‍රියාවලි මෙවර නියැදි ලෙස තෝරා ගැනීමට වැඩි ඉඩක් ඇත:
Procurement / supplier evaluation, Stores, Logistics / delivery and Sales / customer satisfaction || ප්‍රසම්පාදනය / සැපයුම්කරු ඇගයීම, ගබඩාව, ප්‍රවාහනය / බෙදාහැරීම සහ විකුණුම් / පාරිභෝගික තෘප්තිය
(Finance possible). Prepare these first. MRM, internal audit and NCRs are checked at every audit. Final audit plan to be confirmed by Bureau Veritas. || (මූල්‍ය අංශයද විය හැක). මේවා පළමුව සූදානම් කරන්න. MRM, අභ්‍යන්තර විගණනය සහ NCR සෑම විගණනයකදීම පරීක්ෂා කෙරේ. අවසාන විගණන සැලැස්ම Bureau Veritas විසින් තහවුරු කරනු ඇත.
🗂️ MRM held 13-Oct-2026 — minutes and action status to be uploaded || 🗂️ MRM 13-Oct-2026 පැවැත්විණි — රැස්වීම් වාර්තාව සහ ක්‍රියාමාර්ග තත්ත්වය උඩුගත කළ යුතුයි
The 13 action items from the 15-Jul-2026 cycle (4 chronic) were reviewed at the 13-Oct-2026 MRM. Their updated status will be shown here once the minutes are uploaded. || 15-Jul-2026 චක්‍රයේ ක්‍රියාමාර්ග 13 (දිගුකාලීන 4ක් ඇතුළුව) 13-Oct-2026 MRM හිදී සමාලෝචනය කරන ලදී. රැස්වීම් වාර්තාව උඩුගත කළ පසු ඒවායේ යාවත්කාලීන තත්ත්වය මෙහි පෙන්වනු ඇත.
📏 Calibration Completed — Records Pending || 📏 ක්‍රමාංකනය අවසන් — වාර්තා ලැබීමට ඇත
ICSC (QT2026-0494) calibration done on site. Calibration records to be issued upon payment. 2 pressure gauges at the fire pump house still to be calibrated (raised by Hirushan). || ICSC (QT2026-0494) ක්‍රමාංකනය ස්ථානයේදීම සිදු කරන ලදී. ගෙවීමෙන් පසු ක්‍රමාංකන වාර්තා නිකුත් කෙරේ. ගිනි පොම්ප නිවසේ පීඩන මාපක 2ක් තවමත් ක්‍රමාංකනය කළ යුතුයි (Hirushan විසින් පෙන්වා දෙන ලදී).
Days to Surveillance 2 (21 Dec 2026) || අධීක්ෂණ විගණනය 2 ට ඇති දින (2026 දෙසැ. 21)
Last MRM held (2026) — minutes to upload || අවසන් MRM (2026) — රැස්වීම් වාර්තාව උඩුගත කළ යුතුයි
NCRs Closed (incl. IB Joint Audit) || වසා දැමූ NCR (IB ඒකාබද්ධ විගණනය ඇතුළුව)
Expired Statutory Certs || කල් ඉකුත් වූ ව්‍යවස්ථාපිත සහතික
Pending Works || ඉතිරි වැඩ
Before Surveillance 2 || අධීක්ෂණ විගණනය 2 ට පෙර
Item || අයිතමය
Area || ක්ෂේත්‍රය
Status || තත්ත්වය
Surveillance 2 Focus Areas || අධීක්ෂණ විගණනය 2 අවධානය යොමු වන ක්ෂේත්‍ර
Not audited at SA1 — prepare first || SA1 හිදී විගණනය නොකළ — පළමුව සූදානම් කරන්න
Process || ක්‍රියාවලිය
Owner || වගකිවයුත්තා
Evidence on the dashboard || උපකරණ පුවරුවේ ඇති සාක්ෂි
Highlight — IB Joint Audit 2026 || විශේෂ — IB ඒකාබද්ධ විගණනය 2026
TVSM India · Internal + IB Auditors || TVSM ඉන්දියාව · අභ්‍යන්තර + IB විගණකයින්
A joint internal audit with TVS Motor Company's International Business (IB) team (auditors: L Giri, B Muthuraj, Kishor S) reviewed the Assembly Unit and raised 4 findings — all closed with engineering-approved corrective actions, before/after evidence, and documented root cause analysis. Two were statutory (Factories Ordinance No. 45 of 1942) and have been fully remediated. See the || TVS Motor Company හි ජාත්‍යන්තර ව්‍යාපාර (IB) කණ්ඩායම සමඟ කළ ඒකාබද්ධ අභ්‍යන්තර විගණනයක් (විගණකයින්: L Giri, B Muthuraj, Kishor S) එකලස් කිරීමේ ඒකකය සමාලෝචනය කර සොයාගැනීම් 4ක් ඉදිරිපත් කළේය — සියල්ල ඉංජිනේරු අනුමැතිය ලත් නිවැරදි කිරීමේ ක්‍රියාමාර්ග, පෙර/පසු සාක්ෂි සහ ලේඛනගත මූල හේතු විශ්ලේෂණය සමඟ වසා දමා ඇත. දෙකක් ව්‍යවස්ථාපිත (1942 අංක 45 දරන කර්මාන්තශාලා ආඥාපනත) වූ අතර ඒවා සම්පූර්ණයෙන්ම නිවැරදි කර ඇත. සම්පූර්ණ වසා දැමීමේ ලේඛන සඳහා
for full closure documents. || බලන්න.
Quick Access || ඉක්මන් ප්‍රවේශය
9 sections || කොටස් 9
Factory registration, environmental, fire & emergency, training — all current + superseded copies. || කර්මාන්තශාලා ලියාපදිංචිය, පරිසර, ගිනි සහ හදිසි අවස්ථා, පුහුණුව — වත්මන් සහ පැරණි පිටපත් සියල්ල.
33 equipment examination reports from Mr. Asoka Peiris — forklifts, hoists, pressure vessels, machines. || Asoka Peiris මහතාගේ උපකරණ පරීක්ෂණ වාර්තා 33 — ෆෝක්ලිෆ්ට්, හොයිස්ට්, පීඩන භාජන, යන්ත්‍ර.
6 NCRs closed — bird contamination, delivery inspection, plus 4 from the IB Joint Audit. || NCR 6ක් වසා දමා ඇත — කුරුලු දූෂණය, බෙදාහැරීමේ පරීක්ෂාව සහ IB ඒකාබද්ධ විගණනයේ 4ක්.
Management Review Meeting minutes and the 13 overdue action items for the next MRM. || කළමනාකරණ සමාලෝචන රැස්වීම් වාර්තා සහ ඊළඟ MRM සඳහා කල් ඉකුත් වූ ක්‍රියාමාර්ග 13.
Calibration reports — 2026 cycle completed by ICSC, records pending. || ක්‍රමාංකන වාර්තා — 2026 චක්‍රය ICSC විසින් අවසන් කරන ලදී, වාර්තා ලැබීමට ඇත.
Clause 4–9 QMS || 4–9 වගන්ති QMS
The core ISO 9001:2015 structure — context, leadership, planning, support, operations, evaluation. || ISO 9001:2015 හි මූලික ව්‍යුහය — සන්දර්භය, නායකත්වය, සැලසුම්කරණය, සහාය, මෙහෙයුම්, ඇගයීම.
7 quality objectives (TVS/QMS/OMT/01) and the AI tools each department uses. || තත්ත්ව අරමුණු 7 (TVS/QMS/OMT/01) සහ එක් එක් දෙපාර්තමේන්තුව භාවිතා කරන AI මෙවලම්.
Stage 2 (Nov 2024) and Surveillance 1 (Oct 2025) — reports, audit plans, minor NCs, MSI closure. || Stage 2 (2024 නොවැ.) සහ අධීක්ෂණ විගණනය 1 (2025 ඔක්.) — වාර්තා, විගණන සැලසුම්, සුළු NC, MSI වසා දැමීම.
Full Drive Folder || සම්පූර්ණ Drive ෆෝල්ඩරය
Browse the complete ISO Dashboard folder structure directly in Google Drive. || සම්පූර්ණ ISO Dashboard ෆෝල්ඩර ව්‍යුහය Google Drive තුළ සෘජුවම බලන්න.
Certification Status || සහතිකකරණ තත්ත්වය
Bureau Veritas · CBO/9418 || Bureau Veritas · CBO/9418
Detail || විස්තරය
Live-linked to Google Drive · Links open the source document directly in Drive (permission-controlled, not public). || Google Drive සමඟ සජීවීව සම්බන්ධයි · සබැඳි මගින් මුල් ලේඛනය Drive තුළ සෘජුවම විවෘත වේ (අවසර පාලිතයි, පොදු නොවේ).
Dashboard maintained by Denuwan Chamara, Manager – Plant Operations & ISO 9001:2015 Management Representative. || උපකරණ පුවරුව නඩත්තු කරන්නේ Denuwan Chamara, කළමනාකරු – කම්හල් මෙහෙයුම් සහ ISO 9001:2015 කළමනාකරණ නියෝජිත.
✨ Ask ISO assistant || ✨ ISO සහායකගෙන් අසන්න
ISO Assistant || ISO සහායක
Finds ISO records and status on this dashboard and in the ISO Drive folder || මෙම උපකරණ පුවරුවේ සහ ISO Drive ෆෝල්ඩරයේ ඇති ISO වාර්තා සහ තත්ත්වය සොයා දෙයි
New chat || නව සංවාදය
Ask || අසන්න
Looking it up || සොයමින්
Hello! Ask me where an ISO record is, or the status of certificates, NCRs, MRM, calibration, supplier evaluation or audits. I answer from this dashboard and the ISO DASHBOARD Drive folder. || ආයුබෝවන්! ISO වාර්තාවක් කොහේද, නැතහොත් සහතික, NCR, MRM, ක්‍රමාංකනය, සැපයුම්කරු ඇගයීම හෝ විගණනවල තත්ත්වය මගෙන් අසන්න. මම පිළිතුරු දෙන්නේ මෙම උපකරණ පුවරුවෙන් සහ ISO DASHBOARD Drive ෆෝල්ඩරයෙනි.
What should we prepare for Surveillance 2? || අධීක්ෂණ විගණනය 2 සඳහා අප සූදානම් කළ යුත්තේ මොනවාද?
Show the 2026 supplier evaluations || 2026 සැපයුම්කරු ඇගයීම් පෙන්වන්න
Which statutory certificates expire next? || ඊළඟට කල් ඉකුත් වන ව්‍යවස්ථාපිත සහතික මොනවාද?
Status of the NCRs || NCR වල තත්ත්වය
Where are the calibration records? || ක්‍රමාංකන වාර්තා කොහේද?
Ask about certificates, NCRs, MRM, audits… || සහතික, NCR, MRM, විගණන ගැන අසන්න…
Could not reach the assistant. Check the internet connection, or the assistant may not be switched on yet. || සහායකට සම්බන්ධ විය නොහැක. අන්තර්ජාල සම්බන්ධතාවය පරීක්ෂා කරන්න.
The assistant is not available right now. Please try again later. || සහායක දැනට ලබා ගත නොහැක. පසුව නැවත උත්සාහ කරන්න.
Sorry, no answer. Please try again. || සමාවන්න, පිළිතුරක් නැත. නැවත උත්සාහ කරන්න.
Please log in again. || කරුණාකර නැවත ලොග් වන්න.
TVS Lanka ISO 9001 Dashboard || TVS ලංකා ISO 9001 උපකරණ පුවරුව
Vehicle Assembly Complex, Horana. || වාහන එකලස් කිරීමේ සංකීර්ණය, හොරණ.
Log in with the username and PIN you were given. || ඔබට ලබා දුන් පරිශීලක නාමය සහ PIN අංකය සමඟ ලොග් වන්න.
Username || පරිශීලක නාමය
PIN || PIN අංකය
Log in || ලොග් වන්න
Checking… || පරීක්ෂා කරමින්…
Access is recorded. For a login, contact Denuwan Chamara, Manager - Plant Operations. || ප්‍රවේශය සටහන් කෙරේ. ලොග් වීමේ අවසරයක් සඳහා Denuwan Chamara, කළමනාකරු - කම්හල් මෙහෙයුම් අමතන්න.
Wrong username or PIN. || පරිශීලක නාමය හෝ PIN අංකය වැරදියි.
Enter your username and PIN. || ඔබේ පරිශීලක නාමය සහ PIN අංකය ඇතුළත් කරන්න.
Too many wrong tries. Wait 15 minutes, or ask Denuwan. || වැරදි උත්සාහයන් වැඩියි. මිනිත්තු 15ක් රැඳී සිටින්න, නැතහොත් Denuwan ගෙන් අසන්න.
This login is switched off. Ask Denuwan. || මෙම ලොග් වීම අක්‍රිය කර ඇත. Denuwan ගෙන් අසන්න.
This login has expired. Ask Denuwan. || මෙම ලොග් වීම කල් ඉකුත් වී ඇත. Denuwan ගෙන් අසන්න.
Your login has ended. Please log in again. || ඔබේ ලොග් වීම අවසන් විය. කරුණාකර නැවත ලොග් වන්න.
Could not reach the login server. Check the internet connection. || ලොග් වීමේ සේවාදායකයට සම්බන්ධ විය නොහැක. අන්තර්ජාල සම්බන්ධතාවය පරීක්ෂා කරන්න.
The login server is not available right now. || ලොග් වීමේ සේවාදායකය දැනට ලබා ගත නොහැක.
Login failed. || ලොග් වීම අසාර්ථකයි.
Sorry, something went wrong. Please try again. || සමාවන්න, දෝෂයක් ඇති විය. නැවත උත්සාහ කරන්න.
Logged in as || ලොග් වී ඇත්තේ:
Log out || ලොග් අවුට්
External Audits || බාහිර විගණන
The certification trail — Stage 2 (Nov 2024), Surveillance 1 (Oct 2025) and the plan for Surveillance 2 (Dec 2026). || සහතිකකරණ ගමන් මඟ — Stage 2 (2024 නොවැ.), අධීක්ෂණ විගණනය 1 (2025 ඔක්.) සහ අධීක්ෂණ විගණනය 2 (2026 දෙසැ.) සඳහා සැලැස්ම.
Surveillance 2 — 21 December 2026 || අධීක්ෂණ විගණනය 2 — 2026 දෙසැම්බර් 21
Confirmed || තහවුරුයි
Confirmed for 21-Dec-2026 (moved from the tentative 03-Nov-2026). Surveillance 1 (13-Oct-2025) sampled System Management, Production, Quality & Transit, HR and Maintenance. Processes interviewed at Stage 2 but || 21-Dec-2026 ලෙස තහවුරු කර ඇත (තාවකාලික 03-Nov-2026 දින සිට වෙනස් කරන ලදී). අධීක්ෂණ විගණනය 1 (13-Oct-2025) පද්ධති කළමනාකරණය, නිෂ්පාදනය, තත්ත්වය සහ ප්‍රවාහනය, මානව සම්පත් සහ නඩත්තුව නියැදි ලෙස පරීක්ෂා කළේය. Stage 2 හිදී සම්මුඛ සාකච්ඡා කළ නමුත්
not on the SA1 plan || SA1 සැලැස්මේ නොතිබූ
are the most likely to be sampled at Surveillance 2: || ක්‍රියාවලි අධීක්ෂණ විගණනය 2 හිදී නියැදි ලෙස තෝරා ගැනීමට වැඩි ඉඩක් ඇත:
Based on the BV SA1 audit plan and the Stage 2 report. The final SA2 plan from Bureau Veritas will confirm. || BV SA1 විගණන සැලැස්ම සහ Stage 2 වාර්තාව මත පදනම්ව. Bureau Veritas හි අවසාන SA2 සැලැස්මෙන් තහවුරු වනු ඇත.
Surveillance 1 — 13 October 2025 || අධීක්ෂණ විගණනය 1 — 2025 ඔක්තෝබර් 13
On site · GDU / WPR || ස්ථානයේදී · GDU / WPR
Audit Plan — Surveillance 1 (13 Oct 2025) || විගණන සැලැස්ම — අධීක්ෂණ විගණනය 1 (2025 ඔක්. 13)
Site visit, System Management, Production, Quality & Transit, HR, Maintenance || ස්ථාන නැරඹීම, පද්ධති කළමනාකරණය, නිෂ්පාදනය, තත්ත්වය සහ ප්‍රවාහනය, මානව සම්පත්, නඩත්තුව
Stage 2 Certification Audit — November 2024 || Stage 2 සහතිකකරණ විගණනය — 2024 නොවැම්බර්
Final Audit Report — Stage 2 QMS (Nov 2024) || අවසාන විගණන වාර්තාව — Stage 2 QMS (2024 නොවැ.)
Interim Report — Stage 2 QMS (Nov 2024) || අතුරු වාර්තාව — Stage 2 QMS (2024 නොවැ.)
Minor NCs Raised — Certification (Nov 2024) || ඉදිරිපත් වූ සුළු NC — සහතිකකරණය (2024 නොවැ.)
Sri Lanka MSI Action Closure — All Points Closed || ශ්‍රී ලංකා MSI ක්‍රියාමාර්ග වසා දැමීම — සියලු කරුණු වසා ඇත
IB Audit Sri Lanka — presentation || IB විගණනය ශ්‍රී ලංකා — ඉදිරිපත් කිරීම
Audit Ready Links || විගණනයට සූදානම් සබැඳි
Quick Navigation (links to Clauses, Documents, Audits) || ඉක්මන් සංචාලනය (වගන්ති, ලේඛන, විගණන සබැඳි)
Corrective Action Report & Evidence || නිවැරදි කිරීමේ ක්‍රියාමාර්ග වාර්තාව සහ සාක්ෂි
Audit Ready Links (root folder) || විගණනයට සූදානම් සබැඳි (මූල ෆෝල්ඩරය)
Certificate & Contract || සහතිකය සහ ගිවිසුම
Clause 7.1.5 || වගන්තිය 7.1.5
Calibration Records || ක්‍රමාංකන වාර්තා
Equipment calibration certificates — 2026 annual calibration completed by ICSC Calibrations. || උපකරණ ක්‍රමාංකන සහතික — 2026 වාර්ෂික ක්‍රමාංකනය ICSC Calibrations විසින් අවසන් කරන ලදී.
📏 2026 Calibration Completed — Records Pending || 📏 2026 ක්‍රමාංකනය අවසන් — වාර්තා ලැබීමට ඇත
ICSC Calibrations (QT2026-0494) completed calibration on site. Calibration records will be issued upon payment. 2 pressure gauges at the fire pump house are still to be calibrated (raised by Hirushan, Maintenance). || ICSC Calibrations (QT2026-0494) ස්ථානයේදීම ක්‍රමාංකනය අවසන් කළේය. ගෙවීමෙන් පසු ක්‍රමාංකන වාර්තා නිකුත් කෙරේ. ගිනි පොම්ප නිවසේ පීඩන මාපක 2ක් තවමත් ක්‍රමාංකනය කළ යුතුයි (නඩත්තු අංශයේ Hirushan විසින් පෙන්වා දෙන ලදී).
2026 Calibration Cycle || 2026 ක්‍රමාංකන චක්‍රය
Existing Calibration Records || පවතින ක්‍රමාංකන වාර්තා
Oct 2025 cycle || 2025 ඔක්. චක්‍රය
Calibration Records — merged (all reports) || ක්‍රමාංකන වාර්තා — ඒකාබද්ධ (සියලු වාර්තා)
Calibration Records folder || ක්‍රමාංකන වාර්තා ෆෝල්ඩරය
Quality Management System || තත්ත්ව කළමනාකරණ පද්ධතිය
Clause 4–9 QMS Structure || 4–9 වගන්ති QMS ව්‍යුහය
The core ISO 9001:2015 clause structure — context, leadership, planning, support, operations, and performance evaluation. || ISO 9001:2015 හි මූලික වගන්ති ව්‍යුහය — සන්දර්භය, නායකත්වය, සැලසුම්කරණය, සහාය, මෙහෙයුම් සහ කාර්යසාධන ඇගයීම.
📍 Clause 4 — Context of the Organization || 📍 වගන්තිය 4 — ආයතනයේ සන්දර්භය
Factory Engineer Certification (Oct 2025 cycle) || කර්මාන්තශාලා ඉංජිනේරු සහතිකකරණය (2025 ඔක්. චක්‍රය)
Organizational Chart — completed 25-09-2025 || ආයතන සටහන — 25-09-2025 අවසන් කරන ලදී
Communication Needs & Expectations of Interested Parties || සන්නිවේදන අවශ්‍යතා සහ උනන්දුවක් දක්වන පාර්ශවයන්ගේ අපේක්ෂා
Peiris Quotation — Pressure Vessel & Lifting Cert (Jul 2026 cycle) || Peiris මිල ගණන් — පීඩන භාජන සහ එසවුම් සහතික (2026 ජූලි චක්‍රය)
Clause 4 Folder (Process Flows, Context Analysis, Quality Manual) || වගන්තිය 4 ෆෝල්ඩරය (ක්‍රියාවලි ප්‍රවාහ, සන්දර්භ විශ්ලේෂණය, තත්ත්ව අත්පොත)
Folder || ෆෝල්ඩරය
👥 Clause 5 — Leadership || 👥 වගන්තිය 5 — නායකත්වය
Quality Team — Oct 2025 || තත්ත්ව කණ්ඩායම — 2025 ඔක්.
Internal Audit Team — Oct 2025 || අභ්‍යන්තර විගණන කණ්ඩායම — 2025 ඔක්.
Fire Team — 2025.02.27 || ගිනි නිවීමේ කණ්ඩායම — 2025.02.27
First Aid Team — completed 31-05-2024 || ප්‍රථමාධාර කණ්ඩායම — 31-05-2024 අවසන් කරන ලදී
Skill Matrix V1 || කුසලතා න්‍යාසය V1
Clause 5 Folder (Job Responsibilities) || වගන්තිය 5 ෆෝල්ඩරය (රැකියා වගකීම්)
🎯 Clause 6 — Planning || 🎯 වගන්තිය 6 — සැලසුම්කරණය
Objective Monitoring Table — Summary || අරමුණු අධීක්ෂණ වගුව — සාරාංශය
2026–27 update drafted — see Department Objectives || 2026–27 යාවත්කාලීනය කෙටුම්පත් කර ඇත — දෙපාර්තමේන්තු අරමුණු බලන්න
Pending || ඉතිරියි
Clause 6 Folder (Production, Quality, Maintenance, HR, Delivery, Stores, CSAT) || වගන්තිය 6 ෆෝල්ඩරය (නිෂ්පාදනය, තත්ත්වය, නඩත්තුව, මානව සම්පත්, බෙදාහැරීම, ගබඩාව, CSAT)
🛠️ Clause 7 — Support || 🛠️ වගන්තිය 7 — සහාය
Document Control Register || ලේඛන පාලන ලේඛනය
Infrastructure and Maintenance Logs || යටිතල පහසුකම් සහ නඩත්තු සටහන්
Communication Plans || සන්නිවේදන සැලසුම්
Training Records 2024 (+ 2025/26 additions) || පුහුණු වාර්තා 2024 (+ 2025/26 එකතු කිරීම්)
⚙️ Clause 8 — Operations || ⚙️ වගන්තිය 8 — මෙහෙයුම්
Emergency Response Protocol — Vehicle Assembly Complex || හදිසි ප්‍රතිචාර ක්‍රියාපටිපාටිය — වාහන එකලස් කිරීමේ සංකීර්ණය
Fire Risk Assessment Report || ගිනි අවදානම් තක්සේරු වාර්තාව
Lifting Process Validation Report || එසවීමේ ක්‍රියාවලි වලංගුකරණ වාර්තාව
Waste Receipt || අපද්‍රව්‍ය රිසිට්පත
Supplier Evaluation 2026 — Consumable Suppliers || සැපයුම්කරු ඇගයීම 2026 — පරිභෝජන භාණ්ඩ සැපයුම්කරුවන්
14 suppliers · Jan–Oct 2026 · Shantha (Stores) || සැපයුම්කරුවන් 14 · 2026 ජන.–ඔක්. · Shantha (ගබඩාව)
Current || වත්මන්
Supplier Evaluation 2026 — DVA Suppliers || සැපයුම්කරු ඇගයීම 2026 — DVA සැපයුම්කරුවන්
4 suppliers · Jan–Oct 2026 · Shantha (Stores) || සැපයුම්කරුවන් 4 · 2026 ජන.–ඔක්. · Shantha (ගබඩාව)
Outside Process & Supplier Records || බාහිර ක්‍රියාවලි සහ සැපයුම්කරු වාර්තා
📊 Clause 9 — Performance Evaluation || 📊 වගන්තිය 9 — කාර්යසාධන ඇගයීම
NIOSH Environmental Monitoring — merged records || NIOSH පාරිසරික අධීක්ෂණය — ඒකාබද්ධ වාර්තා
Customer Feedback Surveys || පාරිභෝගික ප්‍රතිපෝෂණ සමීක්ෂණ
Clause 8.4 — Supplier Evaluation 2026 || වගන්තිය 8.4 — සැපයුම්කරු ඇගයීම 2026
18 suppliers · all approved (>65%) || සැපයුම්කරුවන් 18 · සියල්ල අනුමතයි (>65%)
Evaluated per purchase order by Stores (Shantha) against TVS/QMS/SUP/03: Quality 60%, Punctuality, Credit, Price and Responsiveness 10% each. Above 65% = approved. Rating scale: A+ >85 · A >80 · B >75 · C >70 · D >65. || TVS/QMS/SUP/03 අනුව එක් එක් මිලදී ගැනීමේ ඇණවුම සඳහා ගබඩාව (Shantha) විසින් ඇගයීම: තත්ත්වය 60%, නියමිත වේලාව, ණය, මිල සහ ප්‍රතිචාරය 10% බැගින්. 65% ට වැඩි = අනුමතයි. ශ්‍රේණි පරිමාණය: A+ >85 · A >80 · B >75 · C >70 · D >65.
Supplier || සැපයුම්කරු
Type || වර්ගය
Evaluations || ඇගයීම්
Average % || සාමාන්‍ය %
Rating (by scale) || ශ්‍රේණිය (පරිමාණය අනුව)
Watch point || අවධානය යොමු කළ යුතු කරුණ
Fix before Surveillance 2 (Procurement is likely to be sampled) || අධීක්ෂණ විගණනය 2 ට පෙර නිවැරදි කරන්න (ප්‍රසම්පාදනය නියැදි ලෙස තෝරා ගැනීමට ඉඩ ඇත)
1. DVA file: Punctuality is 0 on every evaluation for all 4 suppliers. Confirm whether they were really late or the column was not filled. || 1. DVA ගොනුව: සැපයුම්කරුවන් 4 දෙනාගේම සෑම ඇගයීමකම නියමිත වේලාව 0 යි. ඔවුන් ඇත්තටම ප්‍රමාද වූවාද, නැතහොත් තීරුව පුරවා නැද්ද යන්න තහවුරු කරන්න.
2. 4 suppliers averaging 74.5–74.9% are marked "B"; by the scale they are "C". || 2. සාමාන්‍යය 74.5–74.9% වන සැපයුම්කරුවන් 4 දෙනෙකු "B" ලෙස සලකුණු කර ඇත; පරිමාණය අනුව ඔවුන් "C" වේ.
3. Both "Approved List" sheets are still titled "Approved Supplier List – 2025", and "Evaluation period … to …" is blank. || 3. "Approved List" පත්‍ර දෙකෙහිම මාතෘකාව තවමත් "Approved Supplier List – 2025" වන අතර "Evaluation period … to …" හිස්ව ඇත.
4. Ranga (67 on the last 4 POs) and D.S.K. (last 66) are close to the 65% limit. Record a supplier discussion or action. || 4. Ranga (අවසන් PO 4 හි 67) සහ D.S.K. (අවසන් 66) 65% සීමාවට ආසන්නයි. සැපයුම්කරු සාකච්ඡාවක් හෝ ක්‍රියාමාර්ගයක් සටහන් කරන්න.
5. Leftover rows: an old 01-May-2024 row (PO 84262) under Wurth and Samson, a "Romax Marketing" line, and #DIV/0! / #VALUE! cells in empty rows. || 5. ඉතිරි වූ පේළි: Wurth සහ Samson යටතේ පැරණි 01-May-2024 පේළියක් (PO 84262), "Romax Marketing" පේළියක්, සහ හිස් පේළිවල #DIV/0! / #VALUE! කොටු.
Excel · 14 suppliers || Excel · සැපයුම්කරුවන් 14
Excel · 4 suppliers || Excel · සැපයුම්කරුවන් 4
Approved Service Provider List || අනුමත සේවා සපයන්නන්ගේ ලැයිස්තුව
Word || Word
Service Provider Selection Criteria || සේවා සපයන්නන් තෝරාගැනීමේ නිර්ණායක
Previous year || පසුගිය වසර
Supplier Evaluations folder || සැපයුම්කරු ඇගයීම් ෆෝල්ඩරය
All years || සියලු වසර
Clause 6.2 · TVS/QMS/OMT/01 || වගන්තිය 6.2 · TVS/QMS/OMT/01
The 7 quality objectives from the Objective Monitoring Table, with the digital and AI tools each department now uses to measure and achieve them. || අරමුණු අධීක්ෂණ වගුවේ තත්ත්ව අරමුණු 7, ඒවා මැනීමට සහ සාක්ෂාත් කර ගැනීමට එක් එක් දෙපාර්තමේන්තුව දැන් භාවිතා කරන ඩිජිටල් සහ AI මෙවලම් සමඟ.
📝 2026–27 update — draft for MR / Head of Plant Operations approval || 📝 2026–27 යාවත්කාලීනය — MR / කම්හල් මෙහෙයුම් ප්‍රධානීගේ අනුමැතිය සඳහා කෙටුම්පත
The 2024 objectives (TVS/QMS/OMT/01, issued 2024-03-24) are shown as approved. The "2026–27 update" lines are a draft linking each objective to the new digital and AI systems. Once approved, issue revision 01 of TVS/QMS/OMT/01 and record actual 2026 results against each target. || 2024 අරමුණු (TVS/QMS/OMT/01, 2024-03-24 නිකුත් කළ) අනුමත ලෙස පෙන්වා ඇත. "2026–27 යාවත්කාලීනය" පේළි එක් එක් අරමුණ නව ඩිජිටල් සහ AI පද්ධති සමඟ සම්බන්ධ කරන කෙටුම්පතකි. අනුමත වූ පසු TVS/QMS/OMT/01 හි සංශෝධනය 01 නිකුත් කර, එක් එක් ඉලක්කයට එරෙහිව 2026 සැබෑ ප්‍රතිඵල සටහන් කරන්න.
Digital & AI Systems Supporting the QMS || QMS සඳහා සහාය වන ඩිජිටල් සහ AI පද්ධති
Built 2026 || 2026 දී ගොඩනැගූ
System || පද්ධතිය
Department || දෙපාර්තමේන්තුව
What it does || කරන්නේ කුමක්ද
Clause || වගන්තිය
Objectives by Department || දෙපාර්තමේන්තු අනුව අරමුණු
7 objectives || අරමුණු 7
01 · 👥 Human Resource || 01 · 👥 මානව සම්පත්
02 · ✅ Quality || 02 · ✅ තත්ත්වය
03 · 🏭 Production || 03 · 🏭 නිෂ්පාදනය
04 · 📦 Stores || 04 · 📦 ගබඩාව
05 · 🚚 Delivery || 05 · 🚚 බෙදාහැරීම
06 · ⭐ Customer Satisfaction || 06 · ⭐ පාරිභෝගික තෘප්තිය
07 · 🔧 Maintenance || 07 · 🔧 නඩත්තුව
Source Documents || මූලාශ්‍ර ලේඛන
Objective Monitoring Table — Summary (TVS/QMS/OMT/01, 2024) || අරමුණු අධීක්ෂණ වගුව — සාරාංශය (TVS/QMS/OMT/01, 2024)
Rev 00 · issued 2024-03-24 || සංශෝධනය 00 · 2024-03-24 නිකුත් කළ
Clause 6 folder — department management programmes || වගන්තිය 6 ෆෝල්ඩරය — දෙපාර්තමේන්තු කළමනාකරණ වැඩසටහන්
Production, Quality, Maintenance, HR, Delivery, Stores, CSAT || නිෂ්පාදනය, තත්ත්වය, නඩත්තුව, මානව සම්පත්, බෙදාහැරීම, ගබඩාව, CSAT
Statutory Equipment || ව්‍යවස්ථාපිත උපකරණ
Factory Engineer Certifications || කර්මාන්තශාලා ඉංජිනේරු සහතික
33 statutory equipment examination reports under the Factories Ordinance — forklifts, hoists, pressure vessels, fire pumps, and workshop machines. || කර්මාන්තශාලා ආඥාපනත යටතේ ව්‍යවස්ථාපිත උපකරණ පරීක්ෂණ වාර්තා 33 — ෆෝක්ලිෆ්ට්, හොයිස්ට්, පීඩන භාජන, ගිනි පොම්ප සහ වැඩපොළ යන්ත්‍ර.
🌬️ Pressure & Air Systems || 🌬️ පීඩන සහ වායු පද්ධති
5 items || අයිතම 5
3 items || අයිතම 3
14 items || අයිතම 14
Valid || වලංගුයි
🚜 Forklifts || 🚜 ෆෝක්ලිෆ්ට්
🧯 Fire & Pump Systems || 🧯 ගිනි සහ පොම්ප පද්ධති
🏗️ Lifting Equipment || 🏗️ එසවුම් උපකරණ
🏍️ Motorcycle Lifts || 🏍️ යතුරුපැදි එසවුම්
🔧 Workshop Machines || 🔧 වැඩපොළ යන්ත්‍ර
Notes on This Cycle || මෙම චක්‍රය පිළිබඳ සටහන්
Clause 9.3 || වගන්තිය 9.3
Management Review Meeting || කළමනාකරණ සමාලෝචන රැස්වීම
Meeting minutes and the live action item tracker — including chronic items flagged across multiple cycles. || රැස්වීම් වාර්තා සහ සජීවී ක්‍රියාමාර්ග පසුවිපරම — චක්‍ර කිහිපයක් පුරා සලකුණු කළ දිගුකාලීන අයිතම ඇතුළුව.
🔁 4 Chronic Items — Flagged for Root-Cause Discussion || 🔁 දිගුකාලීන අයිතම 4 — මූල හේතු සාකච්ඡාව සඳහා සලකුණු කර ඇත
Water line connection, PVC fume ducting, NIOSH exhaust ducting, and CKD washroom have appeared unresolved across 4 consecutive MRM cycles. || ජල මාර්ග සම්බන්ධතාවය, PVC දුම් නල, NIOSH පිටාර නල සහ CKD වැසිකිළිය අඛණ්ඩ MRM චක්‍ර 4ක් පුරා නොවිසඳී පවතී.
Open Action Items || විවෘත ක්‍රියාමාර්ග
15-Jul-2026 cycle — reviewed at 13-Oct-2026 MRM, status update pending || 15-Jul-2026 චක්‍රය — 13-Oct-2026 MRM හිදී සමාලෝචනය කළා, තත්ත්ව යාවත්කාලීනය ලැබීමට ඇත
Category || කාණ්ඩය
Target || ඉලක්කය
Severity || බරපතලකම
Meeting Minutes || රැස්වීම් වාර්තා
Chronological || කාලානුක්‍රමික
MRM Folder (all records) || MRM ෆෝල්ඩරය (සියලු වාර්තා)
Next Cycle || ඊළඟ චක්‍රය
An MRM was held on 13-Oct-2026. The minutes and the updated status of the 13 items above are to be uploaded before Surveillance 2 (21-Dec-2026). The 4 chronic items should be escalated for root-cause analysis rather than repeated target-date extension. || 13-Oct-2026 දින MRM එකක් පැවැත්විණි. රැස්වීම් වාර්තාව සහ ඉහත අයිතම 13 හි යාවත්කාලීන තත්ත්වය අධීක්ෂණ විගණනය 2 ට (21-Dec-2026) පෙර උඩුගත කළ යුතුයි. දිගුකාලීන අයිතම 4 නැවත නැවත ඉලක්ක දිනය දීර්ඝ කිරීම වෙනුවට මූල හේතු විශ්ලේෂණය සඳහා ඉහළට යොමු කළ යුතුයි.
Corrective Action || නිවැරදි කිරීමේ ක්‍රියාමාර්ග
Non-Conformance Register || අනනුකූලතා ලේඛනය
All raised NCRs with full closure evidence — root cause, corrective action, and supporting documentation. || ඉදිරිපත් වූ සියලු NCR සම්පූර්ණ වසා දැමීමේ සාක්ෂි සමඟ — මූල හේතුව, නිවැරදි කිරීමේ ක්‍රියාමාර්ග සහ ආධාරක ලේඛන.
🐦 NCR 01 — Bird Contamination (Clause 8.5.4) || 🐦 NCR 01 — කුරුලු දූෂණය (වගන්තිය 8.5.4)
Closed || වසා ඇත
Bird droppings noted on completed motorcycles in storage (A280/303, A280/304, A280/302). Raised by Nadeera Kaushan, 26-Sep-2025. Closed 20-Mar-2026 following factory repainting and bird-protection measures (netting, inclined plates). || ගබඩා කර තිබූ නිමි යතුරුපැදි මත කුරුලු බෙටි දක්නට ලැබිණි (A280/303, A280/304, A280/302). Nadeera Kaushan විසින් 26-Sep-2025 ඉදිරිපත් කළා. කර්මාන්තශාලාව නැවත තීන්ත ආලේප කිරීම සහ කුරුලු ආරක්ෂණ ක්‍රම (දැල්, ආනත තහඩු) යෙදීමෙන් පසු 20-Mar-2026 වසා දමන ලදී.
NCR 01 — Closure Record (signed, scanned) || NCR 01 — වසා දැමීමේ වාර්තාව (අත්සන් කළ, ස්කෑන් කළ)
Photos, approved proposal, payment request || ඡායාරූප, අනුමත යෝජනාව, ගෙවීම් ඉල්ලීම
NCR 01 — Blank Template (superseded) || NCR 01 — හිස් ආකෘතිය (පැරණි)
Unfilled register copy — closure record above is authoritative || නොපුරවූ ලේඛන පිටපත — ඉහත වසා දැමීමේ වාර්තාව නිල වාර්තාවයි
Superseded || පැරණි
👁️ NCR — Vision Testing Evidence (2024) || 👁️ NCR — දෘෂ්ටි පරීක්ෂණ සාක්ෂි (2024)
Quality-checking staff required vision testing as part of measuring-equipment competence. Evidence bundle: vision test proof, IFS training evaluation, and skill test records for XL 100 and Raider 125 main lines. || මිනුම් උපකරණ නිපුණතාවයේ කොටසක් ලෙස තත්ත්ව පරීක්ෂක කාර්ය මණ්ඩලයට දෘෂ්ටි පරීක්ෂණ අවශ්‍ය විය. සාක්ෂි: දෘෂ්ටි පරීක්ෂණ සනාථය, IFS පුහුණු ඇගයීම සහ XL 100 සහ Raider 125 ප්‍රධාන පේළි සඳහා කුසලතා පරීක්ෂණ වාර්තා.
Vision Testing Evidence Bundle || දෘෂ්ටි පරීක්ෂණ සාක්ෂි කට්ටලය
Eye Vision Proof, IFS Training Evaluation, 2 Skill Tests || දෘෂ්ටි සනාථය, IFS පුහුණු ඇගයීම, කුසලතා පරීක්ෂණ 2
IB Joint Audit 2026 — TVSM India (International Business) || IB ඒකාබද්ධ විගණනය 2026 — TVSM ඉන්දියාව (ජාත්‍යන්තර ව්‍යාපාර)
4 findings · all closed || සොයාගැනීම් 4 · සියල්ල වසා ඇත
🏍️ NCR 03 — Vehicle De-packing & Lifting Method || 🏍️ NCR 03 — වාහන ඇසුරුම් ඉවත් කිරීම සහ එසවීමේ ක්‍රමය
Belt-lifting method (handlebar/pillion handle) had never undergone formal engineering validation. Closed via engineering-approved lifting procedure + work illustrations displayed at workstation for Ntorq, Jupiter, and Raider. Clause 8.5.1. || පටි මගින් එසවීමේ ක්‍රමය (හැන්ඩලය/පසු අසුනේ අල්ලුව) කිසි විටෙක විධිමත් ඉංජිනේරු වලංගුකරණයකට ලක් වී නොතිබිණි. ඉංජිනේරු අනුමැතිය ලත් එසවීමේ ක්‍රියාපටිපාටියක් සහ Ntorq, Jupiter, Raider සඳහා වැඩපොළේ ප්‍රදර්ශනය කළ වැඩ රූප සටහන් මගින් වසා දමන ලදී. වගන්තිය 8.5.1.
NCR 03 — View PDF (signed, with evidence photos) || NCR 03 — PDF බලන්න (අත්සන් කළ, සාක්ෂි ඡායාරූප සමඟ)
Engineering approvals + lifting work illustrations || ඉංජිනේරු අනුමැති + එසවීමේ වැඩ රූප සටහන්
NCR 03 — Download Word (.docx, editable) || NCR 03 — Word බාගන්න (.docx, සංස්කරණය කළ හැකි)
Open with Word after downloading — Drive preview may distort tables || බාගත කළ පසු Word මගින් විවෘත කරන්න — Drive පෙරදසුනේ වගු විකෘති විය හැක
🔧 NCR 04 — Engine Rework Standardization || 🔧 NCR 04 — එන්ජින් නැවත වැඩ ප්‍රමිතිකරණය
No standardized framework across models for engine rework. Closed via updated service manuals for all models + TVSM-instructed SOP requiring service manual as master reference. Clause 8.7. || එන්ජින් නැවත වැඩ සඳහා මාදිලි හරහා ප්‍රමිතිගත රාමුවක් නොතිබිණි. සියලු මාදිලි සඳහා යාවත්කාලීන සේවා අත්පොත් සහ සේවා අත්පොත ප්‍රධාන යොමුව ලෙස භාවිතා කරන ලෙස TVSM නියම කළ SOP මගින් වසා දමන ලදී. වගන්තිය 8.7.
NCR 04 — View PDF (signed, with evidence photos) || NCR 04 — PDF බලන්න (අත්සන් කළ, සාක්ෂි ඡායාරූප සමඟ)
XL100 Service Manual reference pages || XL100 සේවා අත්පොත් යොමු පිටු
NCR 04 — Download Word (.docx, editable) || NCR 04 — Word බාගන්න (.docx, සංස්කරණය කළ හැකි)
🔥 NCR 05 — Combustible Storage Near Petrol Area || 🔥 NCR 05 — පෙට්‍රල් ප්‍රදේශය අසල දහනය වන ද්‍රව්‍ය ගබඩා කිරීම
Major — Statutory || බරපතල — ව්‍යවස්ථාපිත
Combustible packaging stored ~50ft from petrol filling area — Factories Ordinance No. 45 of 1942. Closed: scrap process changed 15-Mar-2026, area repurposed as finished-vehicle storage. Clause 8.5.4 / 6.1. || පෙට්‍රල් පිරවුම් ප්‍රදේශයේ සිට අඩි ~50ක් දුරින් දහනය වන ඇසුරුම් ගබඩා කර තිබිණි — 1942 අංක 45 දරන කර්මාන්තශාලා ආඥාපනත. වසා ඇත: 15-Mar-2026 සිට සීරීම් ක්‍රියාවලිය වෙනස් කර, එම ප්‍රදේශය නිමි වාහන ගබඩාව ලෙස භාවිතා කෙරේ. වගන්තිය 8.5.4 / 6.1.
NCR 05 — View PDF (signed, with before/after photos) || NCR 05 — PDF බලන්න (අත්සන් කළ, පෙර/පසු ඡායාරූප සමඟ)
Scrap area before/after || සීරීම් ප්‍රදේශය පෙර/පසු
NCR 05 — Download Word (.docx, editable) || NCR 05 — Word බාගන්න (.docx, සංස්කරණය කළ හැකි)
🏥 NCR 06 — Medical / First Aid Facility || 🏥 NCR 06 — වෛද්‍ය / ප්‍රථමාධාර පහසුකම
Adequate permanent medical infrastructure not evident — Factories Ordinance No. 45 of 1942. Closed: permanent medical room operational, signage + emergency protocol, mock drills and refresher training conducted. Clause 7.1.4. || ප්‍රමාණවත් ස්ථිර වෛද්‍ය යටිතල පහසුකම් දක්නට නොලැබිණි — 1942 අංක 45 දරන කර්මාන්තශාලා ආඥාපනත. වසා ඇත: ස්ථිර වෛද්‍ය කාමරය ක්‍රියාත්මකයි, සංඥා පුවරු සහ හදිසි ක්‍රියාපටිපාටිය, ව්‍යාජ පුහුණු අභ්‍යාස සහ ප්‍රතිපෝෂණ පුහුණුව පවත්වන ලදී. වගන්තිය 7.1.4.
NCR 06 — View PDF (signed, with evidence photos) || NCR 06 — PDF බලන්න (අත්සන් කළ, සාක්ෂි ඡායාරූප සමඟ)
Medical room, mock drill, first aid training || වෛද්‍ය කාමරය, ව්‍යාජ අභ්‍යාසය, ප්‍රථමාධාර පුහුණුව
NCR 06 — Download Word (.docx, editable) || NCR 06 — Word බාගන්න (.docx, සංස්කරණය කළ හැකි)
IB Joint Audit — Source & Folder || IB ඒකාබද්ධ විගණනය — මූලාශ්‍රය සහ ෆෝල්ඩරය
NCR 03–06 folder (all 4 closure documents) || NCR 03–06 ෆෝල්ඩරය (වසා දැමීමේ ලේඛන 4ම)
Source: IB Audit Sri Lanka — Assembly Unit (TVSM presentation) || මූලාශ්‍රය: IB විගණනය ශ්‍රී ලංකා — එකලස් කිරීමේ ඒකකය (TVSM ඉදිරිපත් කිරීම)
Auditors: L Giri, B Muthuraj, Kishor S || විගණකයින්: L Giri, B Muthuraj, Kishor S
Non Conformance Register || අනනුකූලතා ලේඛනය
Master files || ප්‍රධාන ගොනු
NCR 02 — Internal Audit 2025 || NCR 02 — අභ්‍යන්තර විගණනය 2025
Non Conformance Register (folder) || අනනුකූලතා ලේඛනය (ෆෝල්ඩරය)
NCR Timeline || NCR කාල රේඛාව
Raised || ඉදිරිපත් කළ දිනය
Compliance || අනුකූලතාව
All factory registration, environmental, fire, and labour certificates — current versions and superseded copies kept for audit trail. || සියලු කර්මාන්තශාලා ලියාපදිංචි, පාරිසරික, ගිනි සහ කම්කරු සහතික — වත්මන් අනුවාද සහ විගණන සාක්ෂි සඳහා තබා ඇති පැරණි පිටපත්.
🏭 Factory Registration & Approvals || 🏭 කර්මාන්තශාලා ලියාපදිංචිය සහ අනුමැති
Certificate of Registration — Factory Ordinance || ලියාපදිංචි සහතිකය — කර්මාන්තශාලා ආඥාපනත
Valid to 28/04/2027 || 28/04/2027 දක්වා වලංගුයි
Building Plan Approval || ගොඩනැගිලි සැලැස්ම අනුමැතිය
Ministry of Industry Approval || කර්මාන්ත අමාත්‍යාංශ අනුමැතිය
COC Certificate — Horana Plant || COC සහතිකය — හොරණ කම්හල
🌱 Environmental || 🌱 පාරිසරික
EPL — TVS Lanka 2026–2027 || EPL — TVS ලංකා 2026–2027
Central Environmental Authority || මධ්‍යම පරිසර අධිකාරිය
EPL 2025 (superseded) || EPL 2025 (පැරණි)
Kept for audit trail || විගණන සාක්ෂි සඳහා තබා ඇත
🧯 Fire & Emergency || 🧯 ගිනි සහ හදිසි අවස්ථා
Annual Fire Cover 2026–2027 || වාර්ෂික ගිනි ආවරණය 2026–2027
Horana Urban Council || හොරණ නගර සභාව
Fire Equipment Plan with Emergency Exit Pathway || හදිසි පිටවීමේ මාර්ගය සහිත ගිනි උපකරණ සැලැස්ම
🎓 Training & Labour || 🎓 පුහුණුව සහ කම්කරු
Occupational First Aid Training Certificate || වෘත්තීය ප්‍රථමාධාර පුහුණු සහතිකය
Save Life Training Academy, May 2026 || Save Life Training Academy, 2026 මැයි
Five Day Work Week Approval || දින පහේ වැඩ සතිය සඳහා අනුමැතිය
Department of Labour || කම්කරු දෙපාර්තමේන්තුව
Folder Access || ෆෝල්ඩර ප්‍රවේශය
Statutory & Compliance Certificates (root folder) || ව්‍යවස්ථාපිත සහ අනුකූලතා සහතික (මූල ෆෝල්ඩරය)
Upload 13-Oct-2026 MRM minutes + update status of the 13 action items (4 chronic) || 13-Oct-2026 MRM වාර්තාව උඩුගත කර ක්‍රියාමාර්ග 13 හි (දිගුකාලීන 4) තත්ත්වය යාවත්කාලීන කරන්න
Minutes to upload || වාර්තාව උඩුගත කළ යුතුයි
Calibrate 2 pressure gauges at fire pump house || ගිනි පොම්ප නිවසේ පීඩන මාපක 2 ක්‍රමාංකනය කරන්න
Open — Hirushan || විවෘතයි — Hirushan
Collect ICSC calibration records (on payment) || ICSC ක්‍රමාංකන වාර්තා ලබා ගන්න (ගෙවීමෙන් පසු)
Awaiting payment || ගෙවීම සඳහා රැඳී සිටී
Department objectives 2026–27 — approve draft (AI tools linked) || දෙපාර්තමේන්තු අරමුණු 2026–27 — කෙටුම්පත අනුමත කරන්න (AI මෙවලම් සම්බන්ධයි)
Clause 6.2 || වගන්තිය 6.2
Draft ready || කෙටුම්පත සූදානම්
Procurement / Supplier evaluation (8.4) || ප්‍රසම්පාදනය / සැපයුම්කරු ඇගයීම (8.4)
Shantha / Procurement || Shantha / ප්‍රසම්පාදනය
2026 evaluations — 18 suppliers || 2026 ඇගයීම් — සැපයුම්කරුවන් 18
On file — 5 fixes || ගොනුවේ ඇත — නිවැරදි කිරීම් 5
Stores — preservation, FIFO, stock (8.5.4) || ගබඩාව — සංරක්ෂණය, FIFO, තොගය (8.5.4)
Stores || ගබඩාව
NCR 01 bird contamination (closed) || NCR 01 කුරුලු දූෂණය (වසා ඇත)
Prepare records || වාර්තා සූදානම් කරන්න
Logistics / Delivery inspection (8.5.4, 8.6) || ප්‍රවාහනය / බෙදාහැරීමේ පරීක්ෂාව (8.5.4, 8.6)
Logistics || ප්‍රවාහනය
NCR 02 delivery job card (closed) || NCR 02 බෙදාහැරීමේ රැකියා කාඩ්පත (වසා ඇත)
Sales / Customer satisfaction (9.1.2) || විකුණුම් / පාරිභෝගික තෘප්තිය (9.1.2)
Sales || විකුණුම්
Customer feedback surveys folder (Clause 9) || පාරිභෝගික ප්‍රතිපෝෂණ සමීක්ෂණ ෆෝල්ඩරය (වගන්තිය 9)
2026 results needed || 2026 ප්‍රතිඵල අවශ්‍යයි
Finance || මූල්‍ය
Possible || විය හැක
Standard || ප්‍රමිතිය
Scope || විෂය පථය
Assembling of Motorcycles || යතුරුපැදි එකලස් කිරීම
Exclusions || බැහැර කිරීම්
Clause 8.3 (Design & Development) and Clause 8.5.1(f) (Post-Delivery Activities) || වගන්තිය 8.3 (සැලසුම් සහ සංවර්ධනය) සහ වගන්තිය 8.5.1(f) (බෙදාහැරීමෙන් පසු ක්‍රියාකාරකම්)
Certification Body || සහතිකකරණ ආයතනය
Last Audit || අවසන් විගණනය
Surveillance 1 — 13 October 2025, on site (see Audit History) || අධීක්ෂණ විගණනය 1 — 2025 ඔක්තෝබර් 13, ස්ථානයේදී (විගණන ඉතිහාසය බලන්න)
Next Milestone || ඊළඟ සන්ධිස්ථානය
Covered || ආවරණය කළා
Not on plan || සැලැස්මේ නැත
Likely || ඉඩ ඇත
Stores (8.5.4) || ගබඩාව (8.5.4)
Logistics / Delivery (8.5.4, 8.6) || ප්‍රවාහනය / බෙදාහැරීම (8.5.4, 8.6)
Partly (Quality & Transit) || අර්ධ වශයෙන් (තත්ත්වය සහ ප්‍රවාහනය)
System Management, Production, Quality, HR, Maintenance || පද්ධති කළමනාකරණය, නිෂ්පාදනය, තත්ත්වය, මානව සම්පත්, නඩත්තුව
Every audit (MRM, internal audit, NCRs) || සෑම විගණනයකදීම (MRM, අභ්‍යන්තර විගණනය, NCR)
Contract No. || ගිවිසුම් අංකය
Stage 2 Result || Stage 2 ප්‍රතිඵලය
Certified — minor NCs raised and closed || සහතික කරන ලදී — සුළු NC ඉදිරිපත් වී වසා දමන ලදී
Next Audit || ඊළඟ විගණනය
Quotation No. || මිල ගණන් අංකය
ICSC Calibrations (continuity with previous years) || ICSC Calibrations (පෙර වසරවල අඛණ්ඩතාව)
16-item equipment list || අයිතම 16ක උපකරණ ලැයිස්තුව
Cost || පිරිවැය
LKR 62,300 (incl. transport) || රු. 62,300 (ප්‍රවාහන ඇතුළුව)
Approval || අනුමැතිය
Approved by Mr. Kaushal || Kaushal මහතා විසින් අනුමත කළා
Calibration done — records issued upon payment || ක්‍රමාංකනය අවසන් — ගෙවීමෙන් පසු වාර්තා නිකුත් කෙරේ
Outstanding || ඉතිරිව ඇති
2 pressure gauges at fire pump house — to calibrate || ගිනි පොම්ප නිවසේ පීඩන මාපක 2 — ක්‍රමාංකනය කළ යුතුයි
Consumable || පරිභෝජන භාණ්ඩ
Punctuality scored 0 || නියමිත වේලාවට 0 ලකුණු
Punctuality falling since Jul (20–40) || ජූලි සිට නියමිත වේලාව අඩු වෙමින් (20–40)
Last score 66 — near the 65 limit || අවසන් ලකුණ 66 — 65 සීමාවට ආසන්නයි
Sheet says B || පත්‍රයේ B ලෙස ඇත
Sheet says B · last 4 = 67 (quality 60) || පත්‍රයේ B ලෙස ඇත · අවසන් 4 = 67 (තත්ත්වය 60)
Sheet says B · punctuality scored 0 || පත්‍රයේ B ලෙස ඇත · නියමිත වේලාවට 0 ලකුණු
Maintenance || නඩත්තුව
Work orders, PM checklists, daily readings, AI assistant, AI meter-photo reading || වැඩ ඇණවුම්, PM පිරික්සුම් ලැයිස්තු, දෛනික කියවීම්, AI සහායක, AI මීටර ඡායාරූප කියවීම
Production, Quality, Stores, Delivery || නිෂ්පාදනය, තත්ත්වය, ගබඩාව, බෙදාහැරීම
Daily figures from the department emails, Pulse cards, AI chat bot for figures || දෙපාර්තමේන්තු ඊමේල්වලින් දෛනික සංඛ්‍යා, Pulse කාඩ්පත්, සංඛ්‍යා සඳහා AI චැට් බොට්
HR / Production || මානව සම්පත් / නිෂ්පාදනය
Skill entry exam for new hires, 6-monthly skill evaluation || නව සේවකයින් සඳහා කුසලතා ප්‍රවේශ විභාගය, මාස 6කට වරක් කුසලතා ඇගයීම
HR || මානව සම්පත්
Approved vs actual carder, attendance || අනුමත සහ සැබෑ කාර්ය මණ්ඩලය, පැමිණීම
AI reads chassis + engine numbers at de-packing and matches the packing list || ඇසුරුම් ඉවත් කිරීමේදී AI මගින් චැසි සහ එන්ජින් අංක කියවා ඇසුරුම් ලැයිස්තුව සමඟ ගළපයි
Sales stock site || විකුණුම් තොග වෙබ් අඩවිය
Stores / Sales || ගබඩාව / විකුණුම්
Ready-to-sell stock by model and colour for the sales team || විකුණුම් කණ්ඩායම සඳහා මාදිලිය සහ වර්ණය අනුව විකිණීමට සූදානම් තොගය
Plant management || කම්හල් කළමනාකරණය
One view of MIS, CMMS, HR and SPARK, with an AI assistant || AI සහායකයෙකු සමඟ MIS, CMMS, HR සහ SPARK එකම තිරයකින්
2024 objective || 2024 අරමුණ
Recruitment completed within 14 days || දින 14ක් ඇතුළත බඳවා ගැනීම අවසන් කිරීම
Initial → target || ආරම්භක → ඉලක්කය
— → 14 days · Six-monthly || — → දින 14 · මාස හයකට වරක්
Digital / AI tools now in use || දැනට භාවිතා වන ඩිජිටල් / AI මෙවලම්
— skill entry exam for new assembly hires on the candidate’s phone (20 picture questions, English/Sinhala, scored Advanced / Intermediate / Basic / Not Qualified) || — නව එකලස් කිරීමේ සේවකයින් සඳහා අපේක්ෂකයාගේ දුරකථනයෙන් කුසලතා ප්‍රවේශ විභාගය (පින්තූර ප්‍රශ්න 20, ඉංග්‍රීසි/සිංහල, Advanced / Intermediate / Basic / Not Qualified ලෙස ලකුණු කෙරේ)
— approved vs actual carder by section, daily attendance || — අංශය අනුව අනුමත සහ සැබෑ කාර්ය මණ්ඩලය, දෛනික පැමිණීම
2026–27 update || 2026–27 යාවත්කාලීනය
Draft || කෙටුම්පත
Keep: recruitment within 14 days. || පවත්වා ගන්න: දින 14ක් ඇතුළත බඳවා ගැනීම.
Add: || එක් කරන්න:
100% of new assembly hires pass the SPARK entry exam (70% or more) before line assignment; 6-monthly SPARK skill evaluation for existing staff. || නව එකලස් කිරීමේ සේවකයින්ගෙන් 100% ක් පේළියට පත් කිරීමට පෙර SPARK ප්‍රවේශ විභාගය (70% හෝ ඊට වැඩි) සමත් වීම; පවතින කාර්ය මණ්ඩලය සඳහා මාස 6කට වරක් SPARK කුසලතා ඇගයීම.
Direct pass rate +2% || සෘජු සමත් අනුපාතය +2%
90% → 92% · Annually || 90% → 92% · වාර්ෂිකව
MIS Quality module || MIS තත්ත්ව මොඩියුලය
— daily quality figures on the MIS site and in the Daily / Weekly Pulse card || — MIS අඩවියේ සහ Daily / Weekly Pulse කාඩ්පතේ දෛනික තත්ත්ව සංඛ්‍යා
Keep: direct pass 92%, now measured daily from the MIS. || පවත්වා ගන්න: සෘජු සමත් 92%, දැන් MIS මගින් දිනපතා මනිනු ලැබේ.
monthly direct-pass trend reviewed at the quality meeting, using the MIS figures as the record. || MIS සංඛ්‍යා වාර්තාව ලෙස භාවිතා කරමින් මාසික සෘජු සමත් ප්‍රවණතාව තත්ත්ව රැස්වීමේදී සමාලෝචනය කිරීම.
Productivity factor +10% with two new model variants || නව මාදිලි ප්‍රභේද දෙකක් සමඟ ඵලදායිතා සාධකය +10%
2.0 → 2.2 · Annually || 2.0 → 2.2 · වාර්ෂිකව
MIS Daily Pulse / Weekly Pulse || MIS Daily Pulse / Weekly Pulse
— production by line every day, attendance and units per person (from the HR Carder data) || — දිනපතා පේළිය අනුව නිෂ්පාදනය, පැමිණීම සහ පුද්ගලයෙකුට ඒකක (HR Carder දත්තවලින්)
Command Centre AI assistant || Command Centre AI සහායක
— answers production questions from the MIS figures || — MIS සංඛ්‍යාවලින් නිෂ්පාදන ප්‍රශ්නවලට පිළිතුරු දෙයි
Keep: productivity factor 2.2. || පවත්වා ගන්න: ඵලදායිතා සාධකය 2.2.
units per person tracked daily per section (CKD / SKD / 3W) from the MIS Pulse; target to be set from the 2026 baseline. || MIS Pulse මගින් අංශය අනුව (CKD / SKD / 3W) පුද්ගලයෙකුට ඒකක දිනපතා පසුවිපරම; ඉලක්කය 2026 මූලික දත්ත අනුව සකසනු ඇත.
Unloading verification + GRN time of CKD/DVA shipments −10% || CKD/DVA නැව්ගත කිරීම් බෑමේ සත්‍යාපනය + GRN කාලය −10%
12 h → 10 h · 8 months || පැය 12 → පැය 10 · මාස 8
— AI reads the chassis and engine number photos at de-packing and checks them against the shipment packing list; mismatches are held || — ඇසුරුම් ඉවත් කිරීමේදී AI මගින් චැසි සහ එන්ජින් අංක ඡායාරූප කියවා නැව්ගත ඇසුරුම් ලැයිස්තුව සමඟ පරීක්ෂා කරයි; නොගැළපෙන ඒවා රඳවා තබයි
MIS Stores module || MIS ගබඩා මොඩියුලය
— daily stock in box form; || — පෙට්ටි ආකාරයෙන් දෛනික තොගය;
for the sales team || විකුණුම් කණ්ඩායම සඳහා
Keep: GRN time 10 h. || පවත්වා ගන්න: GRN කාලය පැය 10.
100% of bikes photo-verified (chassis + engine) against the packing list at de-packing, 0 unverified bikes released. || ඇසුරුම් ඉවත් කිරීමේදී යතුරුපැදි 100% ක් ඇසුරුම් ලැයිස්තුවට එරෙහිව ඡායාරූප මගින් සත්‍යාපනය (චැසි + එන්ජින්), සත්‍යාපනය නොකළ යතුරුපැදි 0ක් නිකුත් කිරීම.
On-time delivery of two-wheelers +5% per month || ද්විරෝද වාහන නියමිත වේලාවට බෙදාහැරීම මසකට +5%
70% → 80% · Annually || 70% → 80% · වාර්ෂිකව
MIS Delivery module || MIS බෙදාහැරීම් මොඩියුලය
— daily delivery figures and pending vehicles; delivery in the Weekly Pulse || — දෛනික බෙදාහැරීම් සංඛ්‍යා සහ ඉතිරි වාහන; Weekly Pulse හි බෙදාහැරීම
Keep: on-time delivery 80%, measured from the MIS delivery records. || පවත්වා ගන්න: නියමිත වේලාවට බෙදාහැරීම 80%, MIS බෙදාහැරීම් වාර්තාවලින් මනිනු ලැබේ.
Customer satisfaction +5% || පාරිභෝගික තෘප්තිය +5%
85% → 90% · Annually || 85% → 90% · වාර්ෂිකව
No digital / AI tool yet || තවම ඩිජිටල් / AI මෙවලමක් නැත
Keep: 90%. || පවත්වා ගන්න: 90%.
Proposed: || යෝජිත:
move the survey to a phone form so results are recorded and summarised automatically. || ප්‍රතිඵල ස්වයංක්‍රීයව සටහන් කර සාරාංශ කිරීමට සමීක්ෂණය දුරකථන ආකෘතියකට ගෙන යාම.
Online maintenance work-order system; no more than 10 requests per month || මාර්ගගත නඩත්තු වැඩ ඇණවුම් පද්ධතිය; මසකට ඉල්ලීම් 10කට නොවැඩි
— → ≤10 per month · Annually || — → මසකට ≤10 · වාර්ෂිකව
— online work orders with approval and tracking, AI maintenance assistant, monthly PM checklists that raise a work order when a check is Not OK || — අනුමැතිය සහ පසුවිපරම සහිත මාර්ගගත වැඩ ඇණවුම්, AI නඩත්තු සහායක, පරීක්ෂාවක් Not OK වූ විට වැඩ ඇණවුමක් නිකුත් කරන මාසික PM පිරික්සුම් ලැයිස්තු
Daily plant readings || දෛනික කම්හල් කියවීම්
— generator, compressor, water meter by 10:00; AI reads the meter photos || — 10:00 ට පෙර ජනක යන්ත්‍රය, සම්පීඩකය, ජල මීටරය; AI මගින් මීටර ඡායාරූප කියවයි
Achieved: || සාක්ෂාත් කළා:
the online system is live and 2026 requests stayed well under 10 per month (13 requests Jan–Nov 2026). || මාර්ගගත පද්ධතිය ක්‍රියාත්මක වන අතර 2026 ඉල්ලීම් මසකට 10 ට වඩා බොහෝ අඩුවෙන් පැවතිණි (2026 ජන.–නොවැ. ඉල්ලීම් 13).
Proposed new objective: || යෝජිත නව අරමුණ:
95% of planned PM checks done on time, and daily readings recorded by 10:00 on 95% of working days. || සැලසුම් කළ PM පරීක්ෂාවලින් 95% ක් නියමිත වේලාවට සිදු කිරීම, සහ වැඩ කරන දිනවලින් 95% ක දී 10:00 ට පෙර දෛනික කියවීම් සටහන් කිරීම.
Examiner || පරීක්ෂක
DL Asoka Peiris — BSc Eng (Hons), M Eng, Government Authorized Examiner under the Factories Ordinance || DL Asoka Peiris — BSc Eng (Hons), M Eng, කර්මාන්තශාලා ආඥාපනත යටතේ රජයේ බලයලත් පරීක්ෂක
Inspection dates || පරීක්ෂණ දින
Two batches: 27.06.2026 (pressure/lifting/fire/machines) and 08.08.2026 (hoists/lifts/platforms) || කාණ්ඩ දෙකක්: 27.06.2026 (පීඩන/එසවුම්/ගිනි/යන්ත්‍ර) සහ 08.08.2026 (හොයිස්ට්/එසවුම්/වේදිකා)
Validity || වලංගුභාවය
All certificates valid exactly 1 year from inspection date || සියලු සහතික පරීක්ෂණ දිනයේ සිට හරියටම වසර 1ක් වලංගුයි
Open source folder in Drive ↗ || Drive හි මූලාශ්‍ර ෆෝල්ඩරය විවෘත කරන්න ↗
Water line connection || ජල මාර්ග සම්බන්ධතාවය
Chronic ×4 || දිගුකාලීන ×4
8.5.4 Utilities || 8.5.4 උපයෝගිතා
critical || ඉතා බරපතල
PVC fume ducting — 3W || PVC දුම් නල — 3W
Ventilation || වාතාශ්‍රය
CKD washroom arrangement || CKD වැසිකිළි සැකසුම
Infrastructure || යටිතල පහසුකම්
NIOSH exhaust ducts — generator & CKD || NIOSH පිටාර නල — ජනක යන්ත්‍රය සහ CKD
Environmental || පාරිසරික
Fire extinguisher foam cart covers || ගිනි නිවන පෙණ කරත්ත ආවරණ
Fire Safety || ගිනි ආරක්ෂාව
Washroom drainage repair || වැසිකිළි ජලාපවහන අලුත්වැඩියාව
high || ඉහළ
Rainwater at fire pump house || ගිනි පොම්ප නිවසේ වැසි ජලය
Pallet jack repair || පැලට් ජැක් අලුත්වැඩියාව
Petroleum supplier registration || ඛනිජ තෙල් සැපයුම්කරු ලියාපදිංචිය
Procurement || ප්‍රසම්පාදනය
Paint booth fans || තීන්ත කුටියේ විදුලි පංකා
medium || මධ්‍යම
Broken fans repair || කැඩුණු විදුලි පංකා අලුත්වැඩියාව
Mungama warehouse gutter covering || මුංගම ගබඩාවේ පීලි ආවරණය
Transit-damage part zone signage || ප්‍රවාහන හානි කොටස් කලාපයේ සංඥා පුවරු
5S / Visual Mgmt || 5S / දෘශ්‍ය කළමනාකරණය
8.5.4 — Preservation || 8.5.4 — සංරක්ෂණය
8.6 — Delivery Inspection Job Card || 8.6 — බෙදාහැරීමේ පරීක්ෂණ රැකියා කාඩ්පත
8.5.1 — Lifting Method || 8.5.1 — එසවීමේ ක්‍රමය
8.7 — Engine Rework || 8.7 — එන්ජින් නැවත වැඩ
8.5.4 / 6.1 — Combustible Storage || 8.5.4 / 6.1 — දහනය වන ද්‍රව්‍ය ගබඩා කිරීම
Closed — Major || වසා ඇත — බරපතල
7.1.4 — Medical Facility || 7.1.4 — වෛද්‍ය පහසුකම
Vision Testing NCR || දෘෂ්ටි පරීක්ෂණ NCR
Measuring equipment competence || මිනුම් උපකරණ නිපුණතාව
Today || අද
Done || අවසන්
13 Oct || ඔක්. 13
The yearly ISO 9001 management review, held with our ISO consultants Halcyon (Pvt) Ltd. One meeting a year — agenda and minutes for each year. || අපගේ ISO උපදේශකයින් වන Halcyon (Pvt) Ltd සමඟ පවත්වන වාර්ෂික ISO 9001 කළමනාකරණ සමාලෝචනය. වසරකට එක් රැස්වීමක් — සෑම වසරකටම න්‍යාය පත්‍රය සහ රැස්වීම් වාර්තාව.
🗂️ 2026 MRM held 13-Oct-2026 — agenda and minutes to be uploaded || 🗂️ 2026 MRM 13-Oct-2026 පැවැත්විණි — න්‍යාය පත්‍රය සහ රැස්වීම් වාර්තාව උඩුගත කළ යුතුයි
Upload the 2026 agenda and minutes before Surveillance 2 (21-Dec-2026). || අධීක්ෂණ විගණනය 2 ට (21-Dec-2026) පෙර 2026 න්‍යාය පත්‍රය සහ රැස්වීම් වාර්තාව උඩුගත කරන්න.
Yearly ISO MRM || වාර්ෂික ISO MRM
With Halcyon (Pvt) Ltd · one meeting a year || Halcyon (Pvt) Ltd සමඟ · වසරකට එක් රැස්වීමක්
Year || වසර
Meeting date || රැස්වීම් දිනය
Records || වාර්තා
Agenda and minutes not on Drive yet || න්‍යාය පත්‍රය සහ රැස්වීම් වාර්තාව තවම Drive හි නැත
Record needed || වාර්තාව අවශ්‍යයි
Agenda and minutes (Word) || න්‍යාය පත්‍රය සහ රැස්වීම් වාර්තාව (Word)
On file || ගොනුවේ ඇත
Agenda and minutes to upload || න්‍යාය පත්‍රය සහ රැස්වීම් වාර්තාව උඩුගත කළ යුතුයි
Agenda and minutes || න්‍යාය පත්‍රය සහ රැස්වීම් වාර්තාව
MRM Agenda — 2025.10.08 || MRM න්‍යාය පත්‍රය — 2025.10.08
MRM Minutes — 2025.10.08 || MRM රැස්වීම් වාර්තාව — 2025.10.08
2025 · Word || 2025 · Word
MRM Agenda — 2024.08.20 || MRM න්‍යාය පත්‍රය — 2024.08.20
MRM Minutes — 2024.08.20 || MRM රැස්වීම් වාර්තාව — 2024.08.20
2024 · Word || 2024 · Word
What the review must cover || සමාලෝචනයෙන් ආවරණය විය යුතු දේ
ISO 9001:2015 Clause 9.3 || ISO 9001:2015 වගන්තිය 9.3
Inputs (9.3.2): || යෙදවුම් (9.3.2):
status of actions from the previous review; changes in internal and external issues; customer satisfaction and feedback; quality objectives; process performance and product conformity; nonconformities and corrective actions; monitoring and measurement results; audit results; performance of external providers; adequacy of resources; effectiveness of actions on risks and opportunities; opportunities for improvement. || පෙර සමාලෝචනයේ ක්‍රියාමාර්ගවල තත්ත්වය; අභ්‍යන්තර සහ බාහිර කරුණුවල වෙනස්කම්; පාරිභෝගික තෘප්තිය සහ ප්‍රතිපෝෂණ; තත්ත්ව අරමුණු; ක්‍රියාවලි කාර්යසාධනය සහ නිෂ්පාදන අනුකූලතාව; අනනුකූලතා සහ නිවැරදි කිරීමේ ක්‍රියාමාර්ග; අධීක්ෂණ සහ මිනුම් ප්‍රතිඵල; විගණන ප්‍රතිඵල; බාහිර සැපයුම්කරුවන්ගේ කාර්යසාධනය; සම්පත්වල ප්‍රමාණවත්භාවය; අවදානම් සහ අවස්ථා සඳහා ගත් ක්‍රියාමාර්ගවල සඵලතාව; වැඩිදියුණු කිරීමේ අවස්ථා.
Outputs (9.3.3): || ප්‍රතිදාන (9.3.3):
decisions and actions on improvement opportunities, any changes needed to the QMS, and resource needs. Keep the minutes as documented information. || වැඩිදියුණු කිරීමේ අවස්ථා පිළිබඳ තීරණ සහ ක්‍රියාමාර්ග, QMS හි අවශ්‍ය වෙනස්කම් සහ සම්පත් අවශ්‍යතා. රැස්වීම් වාර්තාව ලේඛනගත තොරතුරු ලෙස තබා ගන්න.
Monthly Plant Meetings || මාසික කම්හල් රැස්වීම්
The monthly plant management meetings and their action tracker are not part of the ISO management review. They are kept in the CMMS (General MRM). || මාසික කම්හල් කළමනාකරණ රැස්වීම් සහ ඒවායේ ක්‍රියාමාර්ග පසුවිපරම ISO කළමනාකරණ සමාලෝචනයේ කොටසක් නොවේ. ඒවා CMMS (General MRM) හි තබා ඇත.
🗂️ 2026 MRM with Halcyon held 13-Oct-2026 — minutes to be uploaded || 🗂️ Halcyon සමඟ 2026 MRM 13-Oct-2026 පැවැත්විණි — රැස්වීම් වාර්තාව උඩුගත කළ යුතුයි
The yearly ISO management review with our ISO consultants Halcyon was held on 13-Oct-2026. Upload its agenda and minutes before Surveillance 2. || අපගේ ISO උපදේශකයින් වන Halcyon සමඟ වාර්ෂික ISO කළමනාකරණ සමාලෝචනය 13-Oct-2026 පැවැත්විණි. අධීක්ෂණ විගණනය 2 ට පෙර එහි න්‍යාය පත්‍රය සහ රැස්වීම් වාර්තාව උඩුගත කරන්න.
Last ISO MRM with Halcyon (2026) — minutes to upload || Halcyon සමඟ අවසන් ISO MRM (2026) — රැස්වීම් වාර්තාව උඩුගත කළ යුතුයි
Upload the 13-Oct-2026 MRM agenda + minutes (Halcyon) || 13-Oct-2026 MRM න්‍යාය පත්‍රය සහ රැස්වීම් වාර්තාව (Halcyon) උඩුගත කරන්න
The yearly ISO management review with Halcyon — agenda and minutes for 2024, 2025 and 2026. || Halcyon සමඟ වාර්ෂික ISO කළමනාකරණ සමාලෝචනය — 2024, 2025 සහ 2026 න්‍යාය පත්‍ර සහ රැස්වීම් වාර්තා.
Until 27.06.2027 || 27.06.2027 දක්වා
Until 08.08.2027 || 08.08.2027 දක්වා
IB Joint Audit 2026 || IB ඒකාබද්ධ විගණනය 2026
Stage 2 (Nov 2024) || Stage 2 (2024 නොවැ.)
SA1 (Oct 2025) || SA1 (2025 ඔක්.)
SA2 (Dec 2026) || SA2 (2026 දෙසැ.)
Clause 8.3, Clause 8.5.1(f) || වගන්තිය 8.3, වගන්තිය 8.5.1(f)
`;

  var DICT = {};
  DICT_TEXT.split('\n').forEach(function (line) {
    var i = line.indexOf(' || ');
    if (i > 0) DICT[norm(line.slice(0, i))] = line.slice(i + 4).trim();
  });

  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }

  var lang = localStorage.getItem(KEY) === 'si' ? 'si' : 'en';
  var root = document.documentElement;
  var done = [];          // text nodes / elements we changed, so English can be put back
  var busy = false;

  var css = document.createElement('style');
  css.textContent =
    'html[lang="si"] body, html[lang="si"] button, html[lang="si"] input, html[lang="si"] textarea{font-family:Inter,"Nirmala UI","Iskoola Pota","Noto Sans Sinhala",system-ui,sans-serif}' +
    'html[lang="si"] h1, html[lang="si"] h2, html[lang="si"] .brand .title{font-family:Manrope,"Nirmala UI","Iskoola Pota","Noto Sans Sinhala",system-ui,sans-serif;letter-spacing:0}' +
    'html[lang="si"] .brand .mark{letter-spacing:.04em}' +
    '.iso-lang{display:flex;padding:3px;border-radius:999px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.16);' +
    'font:600 12px/1 Inter,"Nirmala UI","Iskoola Pota",system-ui,sans-serif;flex:none}' +
    '.iso-lang button{border:0;background:none;color:#aab6cc;padding:7px 12px;border-radius:999px;cursor:pointer;font:inherit}' +
    '.iso-lang button.on{background:#5ee6cf;color:#06222a}' +
    '#isoLang{position:fixed;top:14px;right:18px;z-index:1001;background:rgba(14,22,40,.85);box-shadow:0 6px 20px rgba(0,0,0,.35)}' +
    'html:not(.gate-locked) #isoLang.gate-only{display:none}' +
    '@media print{.iso-lang{display:none!important}}';
  document.head.appendChild(css);

  function swapText(node) {
    var v = node.nodeValue, k = norm(v);
    if (!k || !DICT[k]) return;
    var lead = v.match(/^\s*/)[0], tail = v.match(/\s*$/)[0];
    node.__en = v;
    node.nodeValue = lead + DICT[k] + tail;
    done.push(node);
  }

  function skip(el) { return el.closest('script,style,.iso-lang,.iso-ai-msg.me'); }

  function translate(el) {
    if (lang !== 'si' || !el) return;
    busy = true;
    try {
      if (el.nodeType === 3) { if (el.__en === undefined && el.parentElement && !skip(el.parentElement)) swapText(el); return; }
      if (el.nodeType !== 1 || skip(el)) return;
      var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) { return n.parentElement && !skip(n.parentElement) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
      });
      var n, list = [];
      while ((n = w.nextNode())) if (n.__en === undefined) list.push(n);
      list.forEach(swapText);
      [el].concat([].slice.call(el.querySelectorAll('[placeholder]'))).forEach(function (f) {
        if (!f.getAttribute || !f.getAttribute('placeholder') || f.__enPh !== undefined) return;
        var t = DICT[norm(f.getAttribute('placeholder'))];
        if (t) { f.__enPh = f.getAttribute('placeholder'); f.setAttribute('placeholder', t); done.push(f); }
      });
    } finally { busy = false; }
  }

  function restore() {
    busy = true;
    done.forEach(function (n) {
      if (n.nodeType === 3 && n.__en !== undefined) { n.nodeValue = n.__en; delete n.__en; }
      else if (n.__enPh !== undefined) { n.setAttribute('placeholder', n.__enPh); delete n.__enPh; }
    });
    done = [];
    busy = false;
  }

  function setLang(l) {
    lang = l;
    localStorage.setItem(KEY, l);
    root.setAttribute('lang', l === 'si' ? 'si' : 'en');
    [].forEach.call(document.querySelectorAll('.iso-lang button'), function (b) { b.classList.toggle('on', b.getAttribute('data-l') === l); });
    if (l === 'si') translate(document.body); else restore();
  }

  function makeToggle(id) {
    var t = document.createElement('div');
    t.id = id;
    t.className = 'iso-lang';
    t.setAttribute('role', 'group');
    t.setAttribute('aria-label', 'Language / භාෂාව');
    t.innerHTML = '<button type="button" data-l="en">English</button><button type="button" data-l="si">සිංහල</button>';
    t.addEventListener('click', function (e) {
      var l = e.target.getAttribute && e.target.getAttribute('data-l');
      if (l && l !== lang) setLang(l);
    });
    return t;
  }

  function addToggles() {
    var corner = makeToggle('isoLang');       // top-right corner: used on the login screen
    var pill = document.querySelector('.topbar .pill');
    if (pill) {                                 // pages: a second switch in the top bar, before the "Live" badge
      corner.classList.add('gate-only');
      var wrap = document.createElement('div');
      wrap.style.cssText = 'display:flex;align-items:center;gap:12px;flex-wrap:wrap;justify-content:flex-end';
      pill.parentNode.insertBefore(wrap, pill);
      wrap.appendChild(makeToggle('isoLangBar'));
      wrap.appendChild(pill);
    }
    document.body.appendChild(corner);
  }

  // For the ISO assistant: which language to answer in.
  window.isoLang = function () { return lang; };

  function start() {
    addToggles();
    setLang(lang);
    new MutationObserver(function (muts) {
      if (busy || lang !== 'si') return;
      muts.forEach(function (m) { [].forEach.call(m.addedNodes, translate); });
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (lang === 'si') root.setAttribute('lang', 'si');
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
