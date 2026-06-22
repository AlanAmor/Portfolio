const copyEmailBtn = document.getElementById("copyEmailBtn");
const copyFeedback = document.getElementById("copyFeedback");
const emailText = "alan43009459@gmail.com";

function revealOnScroll(selector, threshold = 0.18) {
	const elements = document.querySelectorAll(selector);
	if (!elements.length) return;

	const observer = new IntersectionObserver(
		(entries, obs) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					obs.unobserve(entry.target);
				}
			});
		},
		{ threshold }
	);

	elements.forEach((el) => observer.observe(el));
}

function initTech3DHover() {
	const techCards = document.querySelectorAll(".tech-list li");
	if (!techCards.length) return;

	techCards.forEach((card) => {
		card.addEventListener("mousemove", (event) => {
			const rect = card.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			const rotateX = ((y / rect.height) - 0.5) * -12;
			const rotateY = ((x / rect.width) - 0.5) * 14;

			card.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
			card.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
			card.style.setProperty("--mx", `${((x / rect.width) * 100).toFixed(2)}%`);
			card.style.setProperty("--my", `${((y / rect.height) * 100).toFixed(2)}%`);
		});

		card.addEventListener("mouseleave", () => {
			card.style.setProperty("--rx", "0deg");
			card.style.setProperty("--ry", "0deg");
			card.style.setProperty("--mx", "50%");
			card.style.setProperty("--my", "50%");
		});
	});
}

function initProjectCarousels() {
	const carousels = document.querySelectorAll("[data-project-carousel]");

	carousels.forEach((carousel) => {
		const track = carousel.querySelector("[data-carousel-track]");
		const slides = Array.from(track ? track.children : []);
		const prevButton = carousel.querySelector("[data-carousel-prev]");
		const nextButton = carousel.querySelector("[data-carousel-next]");
		const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));

		if (!track || slides.length <= 1) {
			carousel.classList.add("is-static");
			return;
		}

		let activeIndex = 0;

		const updateCarousel = () => {
			track.style.transform = `translateX(-${activeIndex * 100}%)`;
			dots.forEach((dot, dotIndex) => {
				dot.classList.toggle("is-active", dotIndex === activeIndex);
				dot.setAttribute("aria-current", dotIndex === activeIndex ? "true" : "false");
			});
		};

		prevButton?.addEventListener("click", () => {
			activeIndex = (activeIndex - 1 + slides.length) % slides.length;
			updateCarousel();
		});

		nextButton?.addEventListener("click", () => {
			activeIndex = (activeIndex + 1) % slides.length;
			updateCarousel();
		});

		dots.forEach((dot, dotIndex) => {
			dot.addEventListener("click", () => {
				activeIndex = dotIndex;
				updateCarousel();
			});
		});

		updateCarousel();
	});
}

async function copyEmail() {
	try {
		await navigator.clipboard.writeText(emailText);
		if (copyFeedback) copyFeedback.textContent = "Email copied.";
	} catch (error) {
		const tempInput = document.createElement("textarea");
		tempInput.value = emailText;
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		if (copyFeedback) copyFeedback.textContent = "Email copied.";
	}
}

if (copyEmailBtn) {
	copyEmailBtn.addEventListener("click", copyEmail);
}

revealOnScroll(".section", 0.2);
initTech3DHover();
initProjectCarousels();
