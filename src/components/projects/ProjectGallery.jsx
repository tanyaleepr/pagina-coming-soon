/* eslint-disable react/jsx-no-duplicate-props */

import SingleProjectContext from '../../context/SingleProjectContext';
import { useContext } from 'react';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleProjectData.ProjectImages.map((project) => {
				return (
					<div className="mb-10 sm:mb-0" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={project.title}
							key={project.id}
							tools={project.tools}
							url={project.url}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
