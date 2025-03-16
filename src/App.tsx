// @ts-nocheck

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Import your existing component files
// Assuming these paths - adjust based on your actual file structure
import DeepfakeDetector from './components/ui/DeepfakeImageDetector';
import PhishingUrl from './components/ui/PhishingURL';
import ApiSecurity from './components/ui/SpamEmails';
import { VoicePhishingDetector } from './components/ui/VoicePhishingDetector';
import ToolSubmission from './components/ui/ToolSubmission';
import TeamSection from './components/TeamSection';

// Main App component with Router
function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DeepfakeImageDetector" element={<DeepfakeDetector />} />
        <Route path="/PhishingUrl" element={<PhishingUrl />} />
        <Route path="/VoicePhishing" element={<VoicePhishingDetector />} />
        <Route path="/submit-tool" element={<ToolSubmission />} />
        <Route path="/team" element={<TeamSection />} />
      </Routes>
  );
}

// Home page component that contains all your current sections
function HomePage() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <ClientsSection />
      <PricingSection />
      <NewsSection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>Cyber<span>SHIELD</span></h1>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li className="active">Business</li>
          {/* <li>Development</li> */}
          <li><Link to="/submit-tool">Submit Tool</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-subtitle">Detect unknown threats<br />with artificial intelligence</p>
        <h2 className="hero-title">CYBER SECURITY<br />SOLUTIONS</h2>
      </div>
      <div className="hero-graphic">
        {/* 3D Cubes Graphic */}
      </div>
      <div className="hero-features">
        <div className="feature-card">
          <div className="feature-icon neural-network"></div>
          <h3>DeepFake Image Detection</h3>
          <Link to="/DeepfakeImageDetector">
            <button className="get-info-btn">Get info →</button>
          </Link>
        </div>
        <div className="feature-card">
          <div className="feature-icon anomaly-detection"></div>
          <h3>Phishing URL Detection</h3>
          <Link to="/PhishingUrl">
            <button className="get-info-btn">Get info →</button>
          </Link>
        </div>
        <div className="feature-card">
          <div className="feature-icon api-security"></div>
          <h3>DeepFake Voice Detection</h3>
          <Link to="/VoicePhishing">
            <button className="get-info-btn">Get info →</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="section-label">ABOUT US</div>
      <div className="features-content">
        <div className="features-graphic">
          {/* Diamond shape graphic */}
        </div>
        <div className="features-text">
          <h2 className="section-title">A New Generation<br />of Cyber Protection</h2>
          <p>We are a new generation of cyber protection, committed to safeguarding the digital world with cutting-edge security solutions. Our innovative approach combines advanced technology and proactive strategies to defend against evolving cyber threats. With a focus on deepfake detection, phishing analysis, and real-time threat prevention, we empower individuals and businesses to stay secure in an ever-changing digital landscape.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stat-card">
        <h3 className="stat-number">75<span className="percentage">%</span></h3>
        <p className="stat-description">Customer Database<br />Grow in 2018</p>
      </div>
      <div className="stat-card">
        <h3 className="stat-number">90<span className="percentage">%</span></h3>
        <p className="stat-description">Accuracy of Attack<br />Detection</p>
      </div>
      <div className="stat-card">
        <h3 className="stat-number">95<span className="percentage">%</span></h3>
        <p className="stat-description">Effectiveness of<br />Detecting Data</p>
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section className="clients-section">
      <div className="clients-header">
        <h2 className="section-title">Cybersecurity Insights</h2>
      </div>
      <div className="clients-content">

        <div className="client-stats">
          <div className="client-stat">
            <h3>$8 Trillion</h3>
            <p>Global CyberCrime Cost </p>
          </div>
          <div className="client-stat">
            <h3>300,000+</h3>
            <p>New Malware Daily </p>
          </div>
          <div className="client-stat">
            <h3>33B Stolen</h3>
            <p>Data Breaches</p>
          </div>
          <div className="client-stat">
            <h3>90%</h3>
            <p>Human Error Factor</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="pricing-section">
      <div className="section-label">PRICING</div>
      <h2 className="section-title">Protect Your Data</h2>
      <div className="pricing-plans">
        <div className="pricing-plan micro">
          <h3 className="plan-title">Micro</h3>
          <div className="plan-icon"></div>
          <div className="plan-features">
            <div className="plan-feature">
              <span className="feature-name">Limited Tools Access</span>
              <span className="feature-value">5</span>
            </div>
            <div className="plan-feature">
              <span className="feature-name">Deepfake Image scan</span>
              <span className="feature-value">15</span>
            </div>
            <div className="plan-feature">
              <span className="feature-name">50 Scans per month</span>
              <span className="feature-check">✓</span>
            </div>
            <div className="plan-feature">
              <span className="feature-name">Basic Threat Report</span>
              <span className="feature-check">✓</span>
            </div>
            <div className="plan-feature">
              <span className="feature-name">Priority Support</span>
              <span className="feature-x">✕</span>
            </div>
          </div>
          <div className="plan-price">
            <span className="price-currency"></span>
            <span className="price-amount">Free</span>
            <span className="price-period">/ month</span>
          </div>
        </div>
        <div className="pricing-plan pro">
          <h3 className="plan-title">Pro</h3>
          <div className="plan-icon"></div>
          <div className="plan-features">
            <div className="plan-feature">
              <span className="feature-name">Everything from Micro Tier</span>
              <span className="feature-value"></span>
            </div>
            <div className="plan-feature">
              <span className="feature-name">Extended Tool Access</span>
              <span className="feature-value"></span>
            </div>
            <div className="plan-feature">
              <span className="feature-name">Deepfake Audio/Video Detection</span>
              <span className="feature-check">✓</span>
            </div>
            <div className="plan-feature">
              <span className="feature-name">Priority Support</span>
              <span className="feature-check">✓</span>
            </div>
            <div className="plan-feature">
              <span className="feature-name">5 Verified Tool Publishing</span>
              <span className="feature-check">✓</span>
            </div>
          </div>
          <div className="plan-price">
            <span className="price-currency">₹</span>
            <span className="price-amount">2499</span>
            <span className="price-period">/ month</span>
          </div>
        </div>
        <div className="pricing-plan business">
          <h3 className="plan-title">Business</h3>
          <div className="plan-icon"></div>
          <div className="plan-features">
            <div className="plan-feature">
              <span className="feature-name">Everything From Pro Tier</span>
              <span className="feature-value"></span>
            </div>
            <div className="plan-feature">
              <span className="feature-name">Unlimited Tool usage</span>
              <span className="feature-value"></span>
            </div>
            <div className="plan-feature">
              <span className="feature-name">Verified Tool Publishing</span>
              <span className="feature-check">✓</span>
            </div>
            <div className="plan-feature">
              <span className="feature-name">Dedicated Support Team</span>
              <span className="feature-check">✓</span>
            </div>
            <div className="plan-feature">
              <span className="feature-name">Centralized Admin Panel</span>
              <span className="feature-check">✓</span>
            </div>
          </div>
          <div className="plan-price">
            <span className="price-currency">₹</span>
            <span className="price-amount">7999</span>
            <span className="price-period">/ month</span>
          </div>
          <button className="trial-btn">Try Free 2 Weeks Trial</button>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [error, setError] = React.useState(null);
  const apiKey = '36b58c7f72914733a98a2b62ea613f65';

  // Define more specific cybersecurity keywords for better filtering
  const baseQuery = 'cybersecurity OR "cyber security" OR "data breach" OR "cyber attack" OR hacking OR malware OR ransomware';
  
  // Category-specific queries
  const categoryQueries = {
    'all': baseQuery,
    'data-breaches': baseQuery + ' AND ("data breach" OR "data leak" OR "information leak" OR "personal data")',
    'ransomware': baseQuery + ' AND (ransomware OR "ransom attack" OR encryption OR "file encryption")',
    'threats': baseQuery + ' AND ("threat intelligence" OR "cyber threat" OR "security threat" OR vulnerability)',
    'updates': baseQuery + ' AND ("security update" OR patch OR "software update" OR "security fix")'
  };

  const fetchNews = async (category = activeCategory) => {
    setLoading(true);
    setError(null);
    
    try {
      const queryString = categoryQueries[category] || baseQuery;
      
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(queryString)}&apiKey=${apiKey}&pageSize=10&language=en&sortBy=publishedAt&domains=zdnet.com,wired.com,thehackernews.com,threatpost.com,bleepingcomputer.com,krebsonsecurity.com,darkreading.com,securityweek.com,cyberscoop.com,theregister.com`
      );
      
      const data = await response.json();
      
      if (data.status === 'ok' && data.articles && data.articles.length > 0) {
        // Additional filtering to ensure cybersecurity relevance
        const filteredArticles = data.articles.filter(article => {
          const title = article.title?.toLowerCase() || '';
          const description = article.description?.toLowerCase() || '';
          const content = article.content?.toLowerCase() || '';
          
          const securityTerms = ['cyber', 'security', 'hack', 'breach', 'data', 'ransomware', 'malware', 
                                'threat', 'attack', 'vulnerability', 'exploit', 'phishing'];
          
          return securityTerms.some(term => 
            title.includes(term) || description.includes(term) || content.includes(term)
          );
        });
        
        setArticles(filteredArticles.length > 0 ? filteredArticles : data.articles);
      } else {
        setError(data.message || 'No cybersecurity news found');
        setArticles([]);
      }
    } catch (error) {
      console.error('Error fetching cybersecurity news:', error);
      setError('Failed to fetch news. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchNews('all');
  }, []);

  // Filter articles based on selected category
  const filterArticles = (category) => {
    setActiveCategory(category);
    fetchNews(category);
  };

  // Handle refresh button click
  const handleRefresh = () => {
    fetchNews(activeCategory);
  };

  // Format date to "X days ago" format
  const formatDate = (dateString) => {
    const publishedDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - publishedDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays === 1 ? '1 DAY AGO' : `${diffDays} DAYS AGO`;
  };

  return (
    <section className="news-section">
      <div className="section-label">CYBERSECURITY NEWS</div>
      <div className="news-content">
        <div className="news-header">
          <div className="news-title-container">
            <h2 className="section-title">On The<br />News</h2>
            <button 
              className="refresh-btn" 
              onClick={handleRefresh} 
              disabled={loading}
              title="Refresh news"
            >
              ↻
            </button>
          </div>
          <div className="news-categories">
            <div 
              className={`news-category ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => filterArticles('all')}
            >
              ALL
            </div>
            <div 
              className={`news-category ${activeCategory === 'data-breaches' ? 'active' : ''}`}
              onClick={() => filterArticles('data-breaches')}
            >
              DATA BREACHES
            </div>
            <div 
              className={`news-category ${activeCategory === 'ransomware' ? 'active' : ''}`}
              onClick={() => filterArticles('ransomware')}
            >
              RANSOMWARE
            </div>
            <div 
              className={`news-category ${activeCategory === 'threats' ? 'active' : ''}`}
              onClick={() => filterArticles('threats')}
            >
              THREAT INTELLIGENCE
            </div>
            <div 
              className={`news-category ${activeCategory === 'updates' ? 'active' : ''}`}
              onClick={() => filterArticles('updates')}
            >
              SECURITY UPDATES
            </div>
          </div>
        </div>
        
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner-icon"></div>
            <p>Loading cybersecurity news...</p>
          </div>
        ) : error ? (
          <div className="news-error">
            <p>{error}</p>
            <button onClick={handleRefresh} className="retry-btn">
              Try Again
            </button>
          </div>
        ) : articles.length > 0 ? (
          <div className="news-articles">
            {articles.map((article, index) => (
              <div key={index} className="news-article">
                <h3 className="article-title">{article.title}</h3>
                <div className="article-meta">
                  <span className="article-date">{formatDate(article.publishedAt)}</span>
                  <span className="article-source">{article.source.name}</span>
                  <span className="article-category">{activeCategory.toUpperCase()}</span>
                </div>
                <p className="article-excerpt">
                  {article.description?.substring(0, 150) || article.content?.substring(0, 150) || "Read more for details about this cybersecurity news..."}...
                </p>
                <div className="article-actions">
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="read-more-btn"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-articles">
            <p>No cybersecurity news available at the moment.</p>
            <button onClick={handleRefresh} className="retry-btn">
              Refresh
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h1>CyberShield</h1>
      </div>
      <div className="footer-links">
        <span>Services</span>
        <ul>
          <li>Business</li>
          <li>Development</li>
          <li>Solutions</li>
          <li>Team</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="social-links">
        <a href="#" className="social-icon facebook"></a>
        <a href="#" className="social-icon twitter"></a>
        <a href="#" className="social-icon linkedin"></a>
      </div>
    </footer>
  );
}

export default App;