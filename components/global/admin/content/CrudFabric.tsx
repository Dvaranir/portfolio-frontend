import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { IDynamicCrudPage, ECrudPageType, IDynamicProps } from './dynamic.interfaces';
import DefaultButton from "@/components/ui/default-button/DefaultButton";
import styles from './CrudFabric.module.scss';


function CrudFabric({ entities, pageType }: IDynamicCrudPage) {
  const notToRender = ['id']
  const [data, setData] = useState({image: ''})

  const setEntity = (entityName: string, value: string) => setData({...data, [entityName]: value})

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, entityName: string) => setEntity(entityName, event.target.value)

  function genField(field: ReactElement, entityName: string): ReactElement {
    if (notToRender.includes(entityName)) return (<></>);

    return (
      <div key={entityName} className={styles['field-container']}>
        <label htmlFor={entityName}>{entityName.charAt(0).toUpperCase() + entityName.slice(1)}</label>
        {field}
      </div>
    )
  } 

  function chooseField(entityName: string){
    let jsxPart, field = <></>

    function addImage(){
        let entityValue = entities[entityName];
        if (typeof entityValue === 'number') entityValue = '#'

        const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        selectedFile && setEntity("image", URL.createObjectURL(selectedFile));
      }

      const fileInput = useRef<HTMLInputElement>(null)

      const handleImageClick = () => fileInput.current && fileInput.current.click()

      return (<>
                <img className={styles.image} src={data.image ? data.image : entityValue} onClick={handleImageClick} />
                <input ref={fileInput} className={styles.file} type="file" name="image" accept="image/*" onChange={handleFile} />
              </>)
    }

    if (entityName === 'image'){
      jsxPart = genField(addImage(), entityName)
    } else if(entityName === 'description'){
      field = <textarea id={entityName}
                        className={styles.textarea}
                        defaultValue={(pageType === ECrudPageType.Update && entities?.[entityName]) ? entities[entityName] : ""}
                        onChange={(e) => onFieldChange(e, entityName)} />
      jsxPart = genField(field, entityName)
    }else{
      field = <input id={entityName}
                     defaultValue={(pageType === ECrudPageType.Update && entities?.[entityName]) ? entities[entityName] : ""}
                     onChange={(e) => onFieldChange(e, entityName)} />
      jsxPart = genField(field, entityName)
    }

    return jsxPart;
  }

  const genFileds = () => 
    <form className={styles.form} action=''>
      {Object.keys(entities).map(chooseField)}
      <DefaultButton content='Save' type='submit' additionalClass={styles.button} />
    </form>

  return genFileds()
} 

export default CrudFabric