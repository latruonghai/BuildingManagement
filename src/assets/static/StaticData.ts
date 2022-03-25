import { ImageSectionProps } from '../../types/props/index';
import { SlideshowItemProps } from '../../types/components/SlideshowType';
import photo from "../static/images/cp.jpg";
import { ImageSlideShowState } from '../../types/states/imageState';
export const categoriesData: string[] = [
    "Home",
    "Views",
    "About"
];

export const imageViewData: ImageSectionProps[] = [
    {
        imSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlldG5hbSUyMGJlYWNofGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        imgDescription: "Beach"
    },
    {
        imSrc: "https://images.unsplash.com/photo-1603269231725-4ea1da7d02fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldCUyMG5hbXxlbnwwfHwwfHw%3D&w=1000&q=80",
        imgDescription: "Mountain"
    },
    {
        imSrc: "https://images.unsplash.com/photo-1598544919456-fcb105fa7a6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlldCUyMG5hbXxlbnwwfHwwfHw%3D&w=1000&q=80",
        imgDescription: "Tower"
    },
    {
        imSrc: "https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnV0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        imgDescription: "Ocean"
    },
    {
        imSrc: "data:image/jpeg;base64,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",
        imgDescription: "Town"
    },
    {
        imSrc: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=440&h=220&q=60",
        imgDescription: "City"
    },
    {
        imSrc: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1",
        imgDescription: "Bridge"
    },

]

export const slideShowData: ImageSlideShowState[] = [
    {
        title: "Ocean",
        imSrc: "https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnV0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
        title: "City",

        imSrc: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=440&h=220&q=60",
    },
    {
        title: "Bridge",
        imSrc: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1",
    },
    {
        title: "Mountain",
        imSrc: "https://images.unsplash.com/photo-1603269231725-4ea1da7d02fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldCUyMG5hbXxlbnwwfHwwfHw%3D&w=1000&q=80",
    }
]