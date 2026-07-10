import "./App.css";
import logoRojas from "./assets/images/logo-rojas-fc.jpeg";
import heroRojas from "./assets/images/hero-rojas-fc.jpeg";

function App() {
    return (
        <div className="site">
            <header className="header">
                <div className="header__brand">
                    <img
                        className="header__logo"
                        src={logoRojas}
                        alt="Logo de Rojas Fútbol Club"
                    />
                </div>

                <nav className="header__nav">
                    <a href="#inicio">Inicio</a>
                    <a href="#escuela">La Escuela</a>
                    <a href="#categorias">Categorías</a>
                    <a href="#actividades">Actividades</a>
                    <a href="#galeria">Galería</a>
                </nav>

            </header>

            <main>
                <section
                    id="inicio"
                    className="hero"
                    style={{backgroundImage: `url(${heroRojas})`}}
                >
                    <div className="hero__overlay">
                        <div className="hero__content">
                            <h1>
                                Escuela de Fútbol <span>Rojas FC</span>
                            </h1>
                            <h2>Educamos a través del deporte</h2>
                            <div className="hero__underline"></div>
                            <p className="hero__text">
                                Más que una escuela de fútbol,<br/>
                                formamos <span>valores, amistad y</span><br/>
                                <span>pasión</span> por el deporte.
                            </p>

                            <div className="hero__actions">
                                <a
                                    className="button button--primary"
                                    href="https://wa.me/5493517046487"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="button__icon">⚽</span>
                                    Quiero inscribir a mi hijo/a
                                </a>

                                <a
                                    className="button button--secondary"
                                    href="https://wa.me/5493517046487"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="button__icon">💬</span>
                                    Hacer una consulta
                                </a>
                            </div>

                            <div className="hero__cards">
                                <article className="hero__card">
    <span className="hero__card-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9.5" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
    </span>

                                    <strong>4 a 16 años</strong>
                                </article>

                                <article className="hero__card">
    <span className="hero__card-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <path d="M16 2v4"/>
            <path d="M8 2v4"/>
            <path d="M3 10h18"/>
            <path d="M8 14h.01"/>
            <path d="M12 14h.01"/>
            <path d="M16 14h.01"/>
            <path d="M8 18h.01"/>
            <path d="M12 18h.01"/>
        </svg>
    </span>

                                    <div>
                                        <strong>Miércoles y viernes</strong>
                                        <span>18:00 a 20:00 hs</span>
                                    </div>
                                </article>

                                <article className="hero__card">
    <span className="hero__card-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
            <path d="M8 21h8"/>
            <path d="M12 17v4"/>
            <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/>
            <path d="M7 6H4a2 2 0 0 0 0 4h3"/>
            <path d="M17 6h3a2 2 0 0 1 0 4h-3"/>
        </svg>
    </span>

                                    <div>
                                        <strong>Sábados Encuentros</strong>
                                        <span>Liga LIEF</span>
                                    </div>
                                </article>

                                <a
                                    className="hero__card hero__card--link"
                                    href="https://www.google.com/maps/search/?api=1&query=Av.%20Ricardo%20Rojas%208473%2C%20C%C3%B3rdoba"
                                    target="_blank"
                                    rel="noreferrer"
                                >
    <span className="hero__card-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
            <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    </span>

                                    <div>
                                        <strong>Av. Ricardo Rojas 8473,</strong>
                                        <span>Córdoba</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="escuela" className="section section--light">
                    <div className="section__content two-columns">
                        <div
                            className="image-placeholder image-placeholder--photo"
                            style={{
                                backgroundImage: `url("https://res.cloudinary.com/ly2xrtdc/image/upload/v1783630406/WhatsApp_Image_2026-07-08_at_10.02.40_AM_3_ejqitv.jpg")`
                            }}
                        ></div>

                        <div className="school-text">
                            <p className="section__label">La Escuela</p>
                            <h2>Educamos a través del deporte</h2>
                            <p>
                                Rojas FC es una escuela de fútbol infantil y juvenil ubicada en
                                Córdoba, orientada a la formación deportiva y humana de niños,
                                niñas y jóvenes de 4 a 16 años.
                            </p>
                            <p>
                                A través de los entrenamientos, la participación en liga y las
                                actividades grupales, buscamos que cada alumno aprenda, disfrute
                                y crezca en un ambiente de respeto, compañerismo, disciplina y
                                amistad.
                            </p>
                            <p>
                                Nuestro equipo está integrado por profesores de Educación Física
                                recibidos y estudiantes avanzados de la carrera, comprometidos
                                con acompañar a cada grupo desde lo deportivo, lo educativo y lo
                                humano.
                            </p>

                            <div className="values">
    <span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 10L12 5 2 10l10 5 10-5Z" />
            <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
        </svg>
        Formación
    </span>

                                <span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            <path d="M9 12l2 2 4-5" />
        </svg>
        Disciplina
    </span>

                                <span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M11 17l-1.5 1.5a3 3 0 0 1-4.2 0l-.8-.8a3 3 0 0 1 0-4.2L7 11" />
            <path d="M13 7l1.5-1.5a3 3 0 0 1 4.2 0l.8.8a3 3 0 0 1 0 4.2L17 13" />
            <path d="M8 14l8-8" />
            <path d="M16 10l-8 8" />
        </svg>
        Respeto
    </span>

                                <span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.8" />
            <path d="M16 3.2a4 4 0 0 1 0 7.6" />
        </svg>
        Amistad
    </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="categorias" className="section categories-section">
                    <div className="section__content categories-content">
                        <p className="section__label categories-label">Categorías y horarios</p>

                        <h2 className="categories-title">
                            Niños, niñas y jóvenes de 4 a 16 años
                        </h2>

                        <p className="categories-intro">
                            Los grupos se organizan según edad, nivel y etapa de formación.
                            Los entrenamientos se realizan en un espacio pensado para aprender,
                            jugar, compartir y crecer a través del fútbol.
                        </p>

                        <div className="categories-grid">
                            <article className="category-card">
                <span className="category-card__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.8" />
                        <path d="M16 3.2a4 4 0 0 1 0 7.6" />
                    </svg>
                </span>

                                <div>
                                    <h3>Edades</h3>
                                    <p>De 4 a 16 años</p>
                                    <span>Según grupo y etapa formativa</span>
                                </div>
                            </article>

                            <article className="category-card">
                <span className="category-card__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4" />
                        <path d="M8 2v4" />
                        <path d="M3 10h18" />
                        <path d="M8 14h.01" />
                        <path d="M12 14h.01" />
                        <path d="M16 14h.01" />
                        <path d="M8 18h.01" />
                        <path d="M12 18h.01" />
                    </svg>
                </span>

                                <div>
                                    <h3>Entrenamientos</h3>
                                    <p>Miércoles y viernes</p>
                                    <span>18:00 a 20:00 hs</span>
                                </div>
                            </article>

                            <article className="category-card">
                <span className="category-card__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                        <path d="M8 21h8" />
                        <path d="M12 17v4" />
                        <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
                        <path d="M7 6H4a2 2 0 0 0 0 4h3" />
                        <path d="M17 6h3a2 2 0 0 1 0 4h-3" />
                    </svg>
                </span>

                                <div>
                                    <h3>Liga</h3>
                                    <p>Sábados</p>
                                    <span>Participación en Liga LIEF</span>
                                </div>
                            </article>
                        </div>

                        <a
                            className="button button--primary categories-button"
                            href="https://wa.me/5493517046487"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="button__icon">⚽</span>
                            Consultar cupo disponible
                        </a>
                    </div>
                </section>

                <section id="actividades" className="section activities-section">
                    <div className="section__content activities-content">
                        <p className="section__label activities-label">Actividades</p>

                        <h2 className="activities-title">
                            Actividades y Experiencias
                        </h2>

                        <p className="activities-intro">
                            En Rojas FC creemos que el fútbol también se aprende compartiendo
                            experiencias. Por eso, además de los entrenamientos semanales, la
                            escuela participa en encuentros deportivos, torneos, giras y
                            actividades especiales durante el año.
                        </p>

                        <div className="activities-grid">
                            <article className="activity-card">
                                <div
                                    className="activity-card__image"
                                    style={{
                                        backgroundImage: `url("https://res.cloudinary.com/ly2xrtdc/image/upload/v1783712932/IMG_20240207_183724_bxeaxt.jpg")`
                                    }}
                                ></div>
                                <div className="activity-card__body">
                                    <span className="activity-card__icon">⚽</span>
                                    <h3>2 clases semanales</h3>
                                    <p>
                                        Entrenamientos los miércoles y viernes.
                                    </p>
                                </div>
                            </article>

                            <article className="activity-card">
                                <div
                                    className="activity-card__image"
                                    style={{
                                        backgroundImage: `url("https://res.cloudinary.com/ly2xrtdc/image/upload/v1783714179/d41a4f99-3c74-4261-a22b-e9f480430162_m0wnll.png")`
                                    }}
                                ></div>
                                <div className="activity-card__body">
                                    <span className="activity-card__icon">⚽</span>
                                    <h3>Liga LIEF</h3>
                                    <p>
                                        Participación en encuentros y partidos formativos durante los
                                        sábados.
                                    </p>
                                </div>
                            </article>

                            <article className="activity-card">
                                <div
                                    className="activity-card__image"
                                    style={{
                                        backgroundImage: `url("https://res.cloudinary.com/ly2xrtdc/image/upload/v1783710499/WhatsApp_Image_2026-07-08_at_10.02.37_AM_ptpclk.jpg")`
                                    }}
                                ></div>
                                <div className="activity-card__body">
                                    <span className="activity-card__icon">⚽</span>
                                    <h3>Copa Challenger</h3>
                                    <p>
                                        Competencia deportiva para seguir aprendiendo, compartiendo y
                                        creciendo en equipo.
                                    </p>
                                </div>
                            </article>

                            <article className="activity-card">
                                <div
                                    className="activity-card__image"
                                    style={{
                                        backgroundImage: `url("https://res.cloudinary.com/ly2xrtdc/image/upload/v1783710572/WhatsApp_Image_2026-07-08_at_10.02.36_AM_3_oqonns.jpg")`
                                    }}
                                ></div>
                                <div className="activity-card__body">
                                    <span className="activity-card__icon">⚽</span>
                                    <h3>Mundialito</h3>
                                    <p>
                                        Una experiencia de juego, integración y compañerismo para los
                                        chicos.
                                    </p>
                                </div>
                            </article>

                            <article className="activity-card">
                                <div
                                    className="activity-card__image"
                                    style={{
                                        backgroundImage: `url("https://res.cloudinary.com/ly2xrtdc/image/upload/v1783710635/WhatsApp_Image_2026-07-08_at_10.02.33_AM_o2enif.jpg")`
                                    }}
                                ></div>
                                <div className="activity-card__body">
                                    <span className="activity-card__icon">⚽</span>
                                    <h3>Gira deportiva a Buenos Aires</h3>
                                    <p>
                                        Viaje grupal con encuentro deportivo asegurado frente a San
                                        Lorenzo, Argentinos Juniors o Lanús. También se conocen canchas
                                        importantes como Boca Juniors y River Plate.
                                    </p>
                                </div>
                            </article>

                            <article className="activity-card">
                                <div
                                    className="activity-card__image"
                                    style={{
                                        backgroundImage: `url("https://res.cloudinary.com/ly2xrtdc/image/upload/v1783710700/WhatsApp_Image_2026-07-08_at_10.01.52_AM_ytcmbb.jpg")`
                                    }}
                                ></div>
                                <div className="activity-card__body">
                                    <span className="activity-card__icon">⚽</span>
                                    <h3>Campamento de cierre de año</h3>
                                    <p>
                                        Actividad recreativa para cerrar el año compartiendo en comunidad,
                                        con participación y acompañamiento de las familias.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="galeria" className="section gallery-section">
                    <div className="section__content gallery-content">
                        <p className="section__label gallery-label">Galería</p>

                        <h2 className="gallery-title">Momentos de Rojas FC</h2>

                        <p className="gallery-intro">
                            Conocé algunos momentos de entrenamientos, partidos, torneos, viajes,
                            campamentos y actividades compartidas con las familias.
                        </p>

                        <div className="gallery-filters">
            <span className="gallery-filter gallery-filter--active">
                <span className="gallery-filter__icon">⚽</span>
                Entrenamientos
            </span>

                            <span className="gallery-filter">
                <span className="gallery-filter__icon">🏆</span>
                Partidos y Liga LIEF
            </span>

                            <span className="gallery-filter">
                <span className="gallery-filter__icon">🥇</span>
                Torneos y copas
            </span>

                            <span className="gallery-filter">
                <span className="gallery-filter__icon">🚌</span>
                Gira a Buenos Aires
            </span>

                            <span className="gallery-filter">
                <span className="gallery-filter__icon">⛺</span>
                Campamento
            </span>

                            <span className="gallery-filter">
                <span className="gallery-filter__icon">👨‍👩‍👧‍👦</span>
                Familias
            </span>
                        </div>

                        <div className="gallery-grid gallery-grid--editorial">
                            <article className="gallery-card gallery-card--tall">
                                <div
                                    className="gallery-photo"
                                    style={{ backgroundImage: `url("https://res.cloudinary.com/ly2xrtdc/image/upload/v1783717331/WhatsApp_Image_2026-07-08_at_10.02.01_AM_1_timlxt.jpg")` }}
                                ></div>
                            </article>

                            <article className="gallery-card gallery-card--wide">
                                <div
                                    className="gallery-photo"
                                    style={{ backgroundImage: `url("https://res.cloudinary.com/ly2xrtdc/image/upload/v1783717415/WhatsApp_Image_2026-07-08_at_10.02.38_AM_2_y86v4d.jpg")` }}
                                ></div>
                            </article>

                            <article className="gallery-card gallery-card--wide">
                                <div
                                    className="gallery-photo"
                                    style={{ backgroundImage: `url("https://res.cloudinary.com/ly2xrtdc/image/upload/v1783717444/WhatsApp_Image_2026-07-08_at_10.02.43_AM_2_wmkahp.jpg")` }}
                                ></div>
                            </article>

                            <article className="gallery-card">
                                <div
                                    className="gallery-photo"
                                    style={{ backgroundImage: `url("https://res.cloudinary.com/ly2xrtdc/image/upload/v1783717404/WhatsApp_Image_2026-07-08_at_10.02.38_AM_1_acwcbb.jpg")` }}
                                ></div>
                            </article>

                            <article className="gallery-card">
                                <div
                                    className="gallery-photo"
                                    style={{ backgroundImage: `url("https://res.cloudinary.com/ly2xrtdc/image/upload/v1783717308/WhatsApp_Image_2026-07-08_at_10.02.00_AM_lpcgwa.jpg")` }}
                                ></div>
                            </article>

                            <article className="gallery-card">
                                <div
                                    className="gallery-photo"
                                    style={{ backgroundImage: `url("https://res.cloudinary.com/ly2xrtdc/image/upload/v1783717298/WhatsApp_Image_2026-07-08_at_10.02.00_AM_2_hkygmc.jpg")` }}
                                ></div>
                            </article>
                        </div>

                        <a
                            className="gallery-instagram"
                            href="https://www.instagram.com/rojas_futbol_club"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="gallery-instagram__icon">📷</span>
                            Ver más en Instagram
                            <span className="gallery-instagram__arrow">→</span>
                        </a>
                    </div>
                </section>
            </main>

            <a
                className="whatsapp-float"
                href="https://wa.me/5493517046487"
                target="_blank"
                rel="noreferrer"
                aria-label="Enviar mensaje por WhatsApp"
            >
                <svg viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M16.02 3.2C8.95 3.2 3.2 8.9 3.2 15.92c0 2.45.7 4.75 1.93 6.7L3.2 28.8l6.38-1.86a12.82 12.82 0 0 0 6.44 1.72c7.07 0 12.82-5.7 12.82-12.74S23.09 3.2 16.02 3.2Zm0 23.28c-2.05 0-3.95-.6-5.56-1.62l-.4-.25-3.78 1.1 1.13-3.65-.26-.42a10.23 10.23 0 0 1-1.75-5.72c0-5.82 4.77-10.55 10.62-10.55 5.86 0 10.62 4.73 10.62 10.55 0 5.82-4.76 10.56-10.62 10.56Zm5.82-7.9c-.32-.16-1.9-.93-2.2-1.04-.3-.1-.52-.16-.74.16-.21.31-.84 1.03-1.03 1.24-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.58-.95-.84-1.6-1.88-1.78-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.74-1.77-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63c-.21 0-.56.08-.85.4-.3.31-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.27 3.44 5.5 4.82.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.9-.77 2.17-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
                </svg>
            </a>
        </div>
    );
}

export default App;