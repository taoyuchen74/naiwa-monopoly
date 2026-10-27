# Modal keyboard and announcement checks

Run `npm ci`, `npm test`, and `npm run test:a11y`. The accessibility suite runs
Chromium with real keyboard events at 360×800, 390×844, 844×390, 768×1024 and
1440×900. `npm run test:mobile` also includes touch gestures, manual rotation,
scroll containment and keyboard-sized viewport contraction.

The shared modal manager saves the opener before isolating background siblings
with `inert`, including siblings inserted later. It restores their previous inert
values on close. Re-rendered player buttons are found again by player ID. If the
opener no longer exists, focus returns to the main action or settings button.
Initial focus enters the first available body control; text-only panels focus
their labelled title. The Tab order is recalculated for every key event, including
native summaries, form controls, links, editable content, tabindex controls and
open shadow roots. A custom dropdown is a child of its owning dialog: Escape
closes the dropdown first, and Tab continues through the dialog.

Pending game decisions retain their existing lock: Escape announces that a
choice is required and leaves the decision intact. Collapsing a mobile panel
keeps background isolation. Native result summaries retain Enter/Space expansion
and expose rank, name, total assets and status as accessible text.

The visual receipt queue and history are not automatic speech queues. A separate
polite, atomic live region announces a continuous AI sequence once, the human
turn, settlement and coalesced action feedback. Input previews are descriptions
of their controls rather than live announcements on every keystroke. Stock
returns include signs, the current player has a text label and aria-current,
and result ranks/status are textual rather than colour-only.

Browser tests include axe checks of settings, bank, stocks and settlement, with
contrast checks where the engine can resolve colours. These checks do not replace
manual testing with screen readers or an actual mobile software keyboard. The
viewport contraction test emulates keyboard geometry; it does not claim to open
an operating-system keyboard.
