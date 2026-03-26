import React from 'react';

interface Project {
  imageUrl: string;
  imageAlt: string;
  projectName: string;
}

interface ProjectCardProps {
  project: Project;
}

const PropertyCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden">
    </div>
  );
};

export default PropertyCard;