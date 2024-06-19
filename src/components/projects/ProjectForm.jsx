import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectForm = () => {
    const [project, setProject] = useState({ name: '', description: '', goal: 0, fundRaiserAddress: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchProject = async () => {
                try {
                    const response = await axios.get(`/api/projects/${id}`);
                    setProject(response.data);
                } catch (error) {
                    console.error('Error fetching project', error);
                }
            };

            fetchProject();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject({ ...project, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if (id) {
                await axios.put(`/api/projects/${id}`, project, {
                    headers: {
                        'x-auth-token': token,
                    },
                });
            } else {
                await axios.post('/api/projects', project, {
                    headers: {
                        'x-auth-token': token,
                    },
                });
            }
            navigate('/projects');
        } catch (error) {
            console.error('Error saving project', error);
        }
    };
    return (
        <div>
            <h2>{id ? 'Edit Project' : 'Create Project'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={project.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={project.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Goal:</label>
                    <input
                        type="number"
                        name="goal"
                        value={project.goal}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select name="status" value={project.status} onChange={handleChange}>
                        <option value="pending">Pending</option>
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default ProjectForm;
