import { Box } from '@mui/system';
import { Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Carousel from 'react-material-ui-carousel';

const ProjectCard = (props:
    {
        project: any
    }) => {

    function Item(props: any) {

        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ width: '50%' }}>
                    <CardMedia
                        component="img"
                        image={props.item.img}
                        title={props.item.title}
                    />
                </Card>
            </Box>
        )
    }

    const createProjectCard = () => {
        const { project } = props;
        return <div>
            <h1>{project.name}</h1>
            <div style={{ paddingBottom: '2rem', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', paddingInlineStart: 0 }}>
                {project.links.map((link: any) => (
                    <span style={{ display: 'inline-block' }}>
                        <a href={link.url} target="_blank">{link.title}</a>
                    </span>
                ))}
            </div>

            <p>{project.description}</p>
            <Carousel>
                {project.additionalImages.map((item: any, i: any) => (
                    <Item key={i} item={item}></Item>
                ))}

            </Carousel>
        </div>
    }

    return createProjectCard();

}
export default ProjectCard;