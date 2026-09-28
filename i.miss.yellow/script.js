function getLabel(classList) {
	if (classList.contains("godetia")) return "WHAT DOES MEAN TO LIVE?";
	if (classList.contains("anomaly")) return "ODE SIGHTING";
	if (classList.contains("alien")) return ">> SIGNAL INTERCEPT <<";
	if (classList.contains("kioto")) return "COMMERCIAL SECTOR";
	if (classList.contains("ode")) return "ODE ENACTED";
	return "STANDARD LOG";
}

function dateChange(item) {
	document
		.querySelectorAll(".timeline li")
		.forEach((el) => el.classList.remove("selected"));
	item.classList.add("selected");

	item.scrollIntoView({
		behavior: "smooth",
		inline: "center",
		block: "nearest"
	});

	const rawYear = item.querySelector("h3")?.textContent;
	const contentHTML = item.querySelector("div")?.innerHTML;

	const card = document.querySelector("#current_date");
	const yearTarget = card.querySelector("h2");
	const bodyEl = card.querySelector("#content-body");
	const titleEl = card.querySelector(".content h3");
	const catEl = card.querySelector(".content h4");

	card.classList.remove(
		"ambient",
		"godetia",
		"anomaly",
		"alien",
		"kioto",
		"ode"
	);
	item.classList.forEach((cls) => {
		if (cls !== "selected") card.classList.add(cls);
	});

	const labelText = getLabel(item.classList);

	let cleanYear = 0;
	if (rawYear === "INFO") {
		yearTarget.style.fontSize = "5rem";
		cleanYear = "INFO";
	} else {
		yearTarget.style.fontSize = "";
		cleanYear = parseInt(rawYear.replace(/[^\d]/g, ""), 10);
	}

	if (cleanYear === "INFO") {
		yearTarget.textContent = "INFO";
	} else {
		let currentVal = parseInt(yearTarget.textContent, 10) || 1947;
		if (isNaN(currentVal)) currentVal = 2024;

		let proxy = { val: currentVal };

		gsap.to(proxy, {
			val: cleanYear,
			duration: 0.6,
			ease: "power4.out",
			onUpdate: function () {
				yearTarget.textContent = Math.round(proxy.val);
			}
		});
	}

	const tl = gsap.timeline();

	tl
		.to([catEl, titleEl, bodyEl], {
			y: 15,
			opacity: 0,
			duration: 0.1,
			stagger: 0.05,
			onComplete: () => {
				catEl.textContent = labelText;

				const tempDiv = document.createElement("div");
				tempDiv.innerHTML = contentHTML;
				const extractedTitle = tempDiv.querySelector("b")?.textContent || "EVENT";

				titleEl.textContent = extractedTitle.toUpperCase();
				bodyEl.innerHTML = contentHTML;
			}
		})
		.to([catEl, titleEl, bodyEl], {
			y: 0,
			opacity: 1,
			duration: 0.3,
			stagger: 0.1,
			ease: "power2.out"
		});
}

window.addEventListener("load", () => {
	const items = document.querySelectorAll(".timeline li");
	items.forEach((item) => {
		item.addEventListener("click", () => dateChange(item));
	});
	if (items.length > 0) dateChange(items[0]);
});

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', (event) => {
    if (
        event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) ||
        (event.ctrlKey && event.key === 'u')
    ) {
        event.preventDefault();
    }
});