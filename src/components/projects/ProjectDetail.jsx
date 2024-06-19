import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
    const [project, setProject] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`/api/projects/${id}`);
                console.log('Fetched project data:', response.data);
                setProject(response.data.project);
            } catch (error) {
                console.error('Error fetching project', error);
            }
        };

        fetchProject();
    }, [id]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Name:{project.name}</h2>
            <p>Description:{project.description}</p>
            <p>Status: {project.status}</p>
            <Link to={`/projects/edit/${project._id}`}>Edit</Link>
        </div>
    );
};

export default ProjectDetail;
