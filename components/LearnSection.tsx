import React from 'react';

const LearnSection = () => {
    // Image representing expertise/education
    const learnImg = "/profile.png";

    return (
        <section id="learn" className="section learn-section">
            <div className="container grid-2">
                <div className="learn-content-left reveal fade-left">
                    <h2 className="section-title">Learn from <span className="text-accent-gradient">the best</span></h2>
                    <p className="learn-text">
                        Success leaves clues. Beyond managing campaigns, I believe in empowering brands with the knowledge they need to stay ahead. By working with Bash Rabiu, you don't just get a service provider — you get an elite marketing mentor.
                    </p>
                    <p className="learn-text">
                        I've spent years deconstructing what makes the top 1% of brands successful, from their psychological triggers to their technical back-end systems. My "Learn from the best" philosophy means every strategy I implement is explained, every metric is demystified, and every growth lever is handed over to you with complete clarity.
                    </p>
                    <div className="learn-stats">
                        <div className="stat-item">
                            <span className="stat-number">100+</span>
                            <span className="stat-label">Brands Mentored</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years of Data</span>
                        </div>
                        <div className="stat-cta">
                            <a href="#contact" className="btn btn-secondary" style={{ color: 'var(--accent-primary)' }}>Start Learning</a>
                        </div>
                    </div>
                </div>

                <div className="learn-image-right reveal fade-right" style={{ animationDelay: '0.2s' }}>
                    <div className="image-frame hover-glow">
                        <img src={learnImg} alt="Elite Marketing Mentorship" className="learn-img" />
                        <div className="decoration-box"></div>
                    </div>
                </div>
            </div>

            <style>{`
                .learn-section {
                    background-color: var(--bg-secondary);
                    border-top: 1px solid var(--border-subtle);
                }

                .learn-content-left {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .learn-text {
                    font-size: 1.1rem;
                    color: var(--text-muted);
                    margin-top: 24px;
                    line-height: 1.8;
                }

                .learn-stats {
                    display: flex;
                    gap: 30px;
                    align-items: center;
                    justify-content: space-between;
                    margin: 40px 0;
                    padding: 24px 0;
                    border-top: 1px solid var(--border-subtle);
                    border-bottom: 1px solid var(--border-subtle);
                }

                @media (max-width: 640px) {
                    .learn-stats {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 24px;
                    }
                    .stat-cta {
                        width: 100%;
                    }
                    .stat-cta .btn {
                        width: 100%;
                    }
                }

                .stat-item {
                    display: flex;
                    flex-direction: column;
                }

                .stat-number {
                    font-size: 2rem;
                    font-weight: 700;
                    font-family: var(--font-display);
                    color: var(--accent-primary);
                }

                .stat-label {
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .image-frame {
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    aspect-ratio: 1;
                    border: 1px solid var(--border-light);
                }

                .learn-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .decoration-box {
                    position: absolute;
                    top: -10px;
                    left: -10px;
                    width: 60px;
                    height: 60px;
                    background: var(--accent-primary);
                    z-index: -1;
                    opacity: 0.2;
                }

                @media (max-width: 968px) {
                    .grid-2 {
                        grid-template-columns: 1fr;
                        gap: 60px;
                    }
                    .learn-content-left {
                        order: 2;
                    }
                    .learn-image-right {
                        order: 1;
                        max-width: 500px;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
};

export default LearnSection;
