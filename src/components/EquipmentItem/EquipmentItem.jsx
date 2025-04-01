export const EquipmentItem = ({text,icon}) => {
   return(<>
   <svg height={20} width={20} >
        <use href={`${icon}#${icon}`} />
      </svg>
      <p>{text}</p>
   </>)
}