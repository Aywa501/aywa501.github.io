document.addEventListener("DOMContentLoaded", () => {
  // Custom cursor
  const cursor = document.querySelector(".cursor")
  const cursorText = document.createElement("span")
  cursorText.classList.add("cursor-text")
  cursor.appendChild(cursorText)

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
  })

  document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.8)"
  })

  document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)"
  })

  // Enhanced hover effect for links
  const links = document.querySelectorAll("a, button")
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.5)"
      cursor.style.border = "none"
      cursor.style.backgroundColor = "#ffffff"
      cursorText.textContent = "view"
      cursorText.style.opacity = "1"
    })

    link.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)"
      cursor.style.border = "1px solid #e5e5e5"
      cursor.style.backgroundColor = "transparent"
      cursorText.style.opacity = "0"
    })
  })

  // Skill tags hover effect
  const skillTags = document.querySelectorAll(".skill-tag")
  skillTags.forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.2)"
      cursor.style.border = "none"
      cursor.style.backgroundColor = "#ffffff"
    })

    tag.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)"
      cursor.style.border = "1px solid #e5e5e5"
      cursor.style.backgroundColor = "transparent"
    })
  })

  // Active section detection for side navigation
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".side-nav a")

  window.addEventListener("scroll", () => {
    let current = ""
    const scrollY = window.pageYOffset

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })

  // Scroll animations
  function animateOnScroll() {
    const elements = document.querySelectorAll(".reveal")
    const windowHeight = window.innerHeight
    const triggerPoint = windowHeight * 0.8

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < triggerPoint) {
        element.classList.add("active")
      }
    })
  }

  // Initial animations
  function initialAnimations() {
    const heroTitle = document.querySelector("h1")
    const heroLine = document.querySelector(".hero-line")
    const heroSubtitle = document.querySelector(".hero-subtitle")

    setTimeout(() => {
      heroTitle.classList.add("animate-in")
    }, 300)

    setTimeout(() => {
      heroLine.classList.add("animate-in")
    }, 600)

    setTimeout(() => {
      heroSubtitle.classList.add("animate-in")
    }, 900)
  }

  // Animate section headers and content on scroll
  function animateSections() {
    const sectionHeaders = document.querySelectorAll(".section-header")
    const sectionContents = document.querySelectorAll(".section-content")
    const gridItems = document.querySelectorAll(".grid-item")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    sectionHeaders.forEach((header) => observer.observe(header))
    sectionContents.forEach((content) => observer.observe(content))
    gridItems.forEach((item) => observer.observe(item))
  }

  // Parallax effect for hero section
  function parallaxEffect() {
    const heroCircle = document.querySelector(".hero-circle")

    window.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      heroCircle.style.transform = `translate(${x * 20}px, ${y * 20 - 50}%)`
    })
  }

  // Add geometric shapes
  function addGeometricShapes() {
    const shapesContainer = document.createElement("div")
    shapesContainer.classList.add("shapes-container")
    document.body.appendChild(shapesContainer)

    const shapes = [
      { type: "circle", size: 200, top: "15%", left: "5%", color: "#333" },
      { type: "square", size: 150, top: "60%", left: "8%", color: "#333" },
      { type: "circle", size: 100, top: "80%", left: "80%", color: "#333" },
      { type: "square", size: 80, top: "30%", left: "90%", color: "#333" },
    ]

    shapes.forEach((shapeData) => {
      const shape = document.createElement("div")
      shape.classList.add("shape", `shape-${shapeData.type}`)
      shape.style.width = `${shapeData.size}px`
      shape.style.height = `${shapeData.size}px`
      shape.style.top = shapeData.top
      shape.style.left = shapeData.left
      shape.style.backgroundColor = shapeData.color

      shapesContainer.appendChild(shape)
    })
  }

  // Form submission with animation
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      // In a real application, you would send this data to a server
      console.log("Form submitted:", { name, email, message })

      // Show success message with animation
      const formContainer = contactForm.parentElement
      formContainer.innerHTML = `
        <div class="success-message" style="opacity: 0; transform: translateY(20px);">
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out, ${name}. I'll get back to you soon.</p>
        </div>
      `

      setTimeout(() => {
        const successMessage = document.querySelector(".success-message")
        successMessage.style.opacity = "1"
        successMessage.style.transform = "translateY(0)"
        successMessage.style.transition = "all 0.5s ease"
      }, 100)
    })
  }

  // Initialize all animations and effects
  initialAnimations()
  animateSections()
  parallaxEffect()
  addGeometricShapes()
  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Run once on load
})
