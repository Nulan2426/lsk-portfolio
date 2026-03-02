import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

export default function ProjectCard({ title, description, link, repo, status }) {
    const safeStatus = status || "";

    return (
        <div className={`project-card glass ${safeStatus === 'In Progress' ? 'dimmed' : ''}`}>
         
            {status && (
                <div className={`status-badge ${status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {status}
                </div>
            )}

            <h3>{title}</h3>
            <p>{description}</p>

            <div className="card-links">
                {link && (
                    <a href={link} target="_blank" rel="noreferrer" className="link-icon">
                        <ExternalLink size={18} /> Live
                    </a>
                )}
                {repo && (
                    <a href={repo} target="_blank" rel="noreferrer" className="link-icon">
                        <Code2 size={18} /> Code
                    </a>
                )}
            </div>
        </div>
    );
}