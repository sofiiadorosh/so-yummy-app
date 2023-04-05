import { Link } from 'react-router-dom';
import { CardContainer, Image, CardTitle, TooltipWrapper } from './MealItem.styled';
import { Tooltip } from 'react-tooltip';

export const MealItem = ({ id, thumb, title }) => {
  return (
    <CardContainer>
      <Link to={`/recipe/${id}`}>
        <Image src={thumb} alt={title} />
        <CardTitle data-tooltip-id={id}>{title} </CardTitle>
        {title.length > 30 && (
          <Tooltip id={id} content={title} place="bottom" noArrow="false" />
        )}
      </Link>
    </CardContainer>
  );
};