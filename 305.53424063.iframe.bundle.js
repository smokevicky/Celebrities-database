"use strict";(self.webpackChunkcelebrities_database=self.webpackChunkcelebrities_database||[]).push([[305],{"./src/app/apiData/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return apiData_genders_namespaceObject}});var genders_namespaceObject=JSON.parse('{"Male":{"label":"Male","value":"male"},"Female":{"label":"Female","value":"female"},"Transgender":{"label":"Transgender","value":"transgender"},"Other":{"label":"Other","value":"other"},"NOT_TO_SAY":{"label":"Rather not say","value":"NOT_TO_SAY"}}'),apiData_genders_namespaceObject=__webpack_require__.t(genders_namespaceObject,2)},"./src/stories/components/atoms/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{F7:function(){return AccordionAtom},sD:function(){return DialogBox},PR:function(){return DobPicker},Rj:function(){return SearchBox}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),apiData=__webpack_require__("./src/app/apiData/index.ts"),ExpandMore=__webpack_require__("./node_modules/@mui/icons-material/esm/ExpandMore.js"),DeleteOutlined=__webpack_require__("./node_modules/@mui/icons-material/esm/DeleteOutlined.js"),EditOutlined=__webpack_require__("./node_modules/@mui/icons-material/esm/EditOutlined.js"),CancelOutlined=__webpack_require__("./node_modules/@mui/icons-material/esm/CancelOutlined.js"),CheckCircleOutlineOutlined=__webpack_require__("./node_modules/@mui/icons-material/esm/CheckCircleOutlineOutlined.js"),Avatar=__webpack_require__("./node_modules/@mui/joy/Avatar/Avatar.js"),Textarea=__webpack_require__("./node_modules/@mui/joy/Textarea/Textarea.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Accordion=__webpack_require__("./node_modules/@mui/material/Accordion/Accordion.js"),AccordionSummary=__webpack_require__("./node_modules/@mui/material/AccordionSummary/AccordionSummary.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),AccordionDetails=__webpack_require__("./node_modules/@mui/material/AccordionDetails/AccordionDetails.js"),FormControl=__webpack_require__("./node_modules/@mui/material/FormControl/FormControl.js"),Select=__webpack_require__("./node_modules/@mui/material/Select/Select.js"),MenuItem=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),AccordionActions=__webpack_require__("./node_modules/@mui/material/AccordionActions/AccordionActions.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),AccordionAtom=function AccordionAtom(_ref){var isExpanded=_ref.isExpanded,id=_ref.id,firstName=_ref.firstName,lastName=_ref.lastName,profilePicture=_ref.profilePicture,dob=_ref.dob,country=_ref.country,description=_ref.description,gender=_ref.gender,_ref$isInEditMode=_ref.isInEditMode,isInEditMode=void 0!==_ref$isInEditMode&&_ref$isInEditMode,_ref$onChange=_ref.onChange,onChange=void 0===_ref$onChange?function(){}:_ref$onChange,_ref$onSubmit=_ref.onSubmit,onSubmit=void 0===_ref$onSubmit?function(){}:_ref$onSubmit,_ref$onDelete=_ref.onDelete,onDelete=void 0===_ref$onDelete?function(){}:_ref$onDelete,_ref$onEditModeToggle=_ref.onEditModeToggle,onEditModeToggle=void 0===_ref$onEditModeToggle?function(){}:_ref$onEditModeToggle,_useState=(0,react.useState)(isInEditMode),_useState2=(0,slicedToArray.Z)(_useState,2),isEditMode=_useState2[0],setIsEditMode=_useState2[1],_useState3=(0,react.useState)(firstName),_useState4=(0,slicedToArray.Z)(_useState3,2),firstNameValue=_useState4[0],setFirstNameValue=_useState4[1],_useState5=(0,react.useState)(lastName),_useState6=(0,slicedToArray.Z)(_useState5,2),lastNameValue=_useState6[0],setLastNameValue=_useState6[1],_useState7=(0,react.useState)(dob),_useState8=(0,slicedToArray.Z)(_useState7,2),dobValue=_useState8[0],setDobValue=_useState8[1],_useState9=(0,react.useState)(country),_useState10=(0,slicedToArray.Z)(_useState9,2),countryValue=_useState10[0],setCountryValue=_useState10[1],_useState11=(0,react.useState)(description),_useState12=(0,slicedToArray.Z)(_useState11,2),descriptionValue=_useState12[0],setDescriptionValue=_useState12[1],_useState13=(0,react.useState)(gender),_useState14=(0,slicedToArray.Z)(_useState13,2),genderValue=_useState14[0],setGenderValue=_useState14[1];(0,react.useEffect)((function(){setFirstNameValue(firstName),setLastNameValue(lastName),setDobValue(dob),setCountryValue(country),setDescriptionValue(description),setGenderValue(gender)}),[firstName,lastName,dob,country,description,gender]);var styles={profilePicture:{border:"4px solid #CECECE",borderRadius:"50%"},userName:{marginLeft:"20px"},userDetail:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"90%"},userData:{marginTop:"2%"},user:{display:"block"},primaryText:{color:"#767679",fontSize:"1.1rem"},secondaryText:{color:"#000",fontSize:"1rem"},userActionIcons:{fontSize:"1.5rem",cursor:"pointer"},summaryContainer:{display:"flex",alignItems:"center"},accordionContainer:{paddingX:"1rem",paddingY:"10px",borderColor:"#0000004a"}},isUserAnAdult=function isUserAnAdult(){return!!(getAge(dob.toString())>18)},getAge=function getAge(dateString){var today=new Date,birthDate=new Date(dateString),age=today.getFullYear()-birthDate.getFullYear(),m=today.getMonth()-birthDate.getMonth();return(m<0||0===m&&today.getDate()<birthDate.getDate())&&age--,age},handleChange=function handleChange(panel){onChange(!!isExpanded&&panel)},handleEditEnd=function handleEditEnd(){setIsEditMode(!1),onEditModeToggle(!1)};return(0,jsx_runtime.jsx)(Box.Z,{children:(0,jsx_runtime.jsxs)(Accordion.Z,{variant:"outlined",expanded:isExpanded,onChange:function onChange(){return handleChange("panel1")},sx:styles.accordionContainer,children:[(0,jsx_runtime.jsx)(AccordionSummary.Z,{expandIcon:(0,jsx_runtime.jsx)(ExpandMore.Z,{}),children:(0,jsx_runtime.jsxs)(Box.Z,{sx:styles.summaryContainer,children:[(0,jsx_runtime.jsx)(Avatar.Z,{alt:"".concat(firstNameValue,"-").concat(lastNameValue),src:profilePicture,size:"lg"}),isEditMode?(0,jsx_runtime.jsx)(TextField.Z,{defaultValue:"".concat(firstNameValue," ").concat(lastNameValue),type:"text",variant:"outlined",onChange:function onChange(event){return function handleNameUpdate(fullName){var _fullName$split,_fullName$split2,calculatedFirstName=null==fullName||null===(_fullName$split=fullName.split(" "))||void 0===_fullName$split?void 0:_fullName$split[0],calculatedLastName=null==fullName||null===(_fullName$split2=fullName.split(" "))||void 0===_fullName$split2?void 0:_fullName$split2[1];calculatedFirstName&&setFirstNameValue(calculatedFirstName),calculatedLastName&&setLastNameValue(calculatedLastName)}(event.target.value)}}):(0,jsx_runtime.jsx)(Typography.Z,{variant:"h5",sx:styles.userName,children:"".concat(firstNameValue," ").concat(lastNameValue)})]})}),(0,jsx_runtime.jsxs)(AccordionDetails.Z,{sx:styles.user,children:[(0,jsx_runtime.jsxs)(Box.Z,{sx:styles.userDetail,children:[(0,jsx_runtime.jsxs)(Box.Z,{sx:styles.userData,children:[(0,jsx_runtime.jsx)(Typography.Z,{sx:styles.primaryText,children:"Age"}),isEditMode?(0,jsx_runtime.jsx)(DobPicker,{defaultValue:dobValue,onChange:function onChange(updatedValue){return setDobValue(updatedValue)}}):(0,jsx_runtime.jsx)(Typography.Z,{sx:styles.secondaryText,children:"".concat(getAge(dobValue.toString())," Years")})]}),(0,jsx_runtime.jsxs)(Box.Z,{sx:styles.userData,children:[(0,jsx_runtime.jsx)(Typography.Z,{sx:styles.primaryText,children:"Gender"}),isEditMode?(0,jsx_runtime.jsx)(FormControl.Z,{variant:"outlined",children:(0,jsx_runtime.jsx)(Select.Z,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",onChange:function onChange(event){var _Object$values$filter;return setGenderValue(null===(_Object$values$filter=Object.values(apiData.c).filter((function(g){return g.value===event.target.value})))||void 0===_Object$values$filter?void 0:_Object$values$filter[0])},label:"Age",defaultValue:genderValue.value,children:Object.values(apiData.c).map((function(genderItem,index){return(0,jsx_runtime.jsx)(MenuItem.Z,{value:genderItem.value,children:genderItem.label},"".concat(index,"-").concat(genderItem.value))}))})}):(0,jsx_runtime.jsx)(Typography.Z,{sx:styles.secondaryText,children:genderValue.label})]}),(0,jsx_runtime.jsxs)(Box.Z,{sx:styles.userData,children:[(0,jsx_runtime.jsx)(Typography.Z,{sx:styles.primaryText,children:"Country"}),isEditMode?(0,jsx_runtime.jsx)(TextField.Z,{defaultValue:countryValue,type:"text",onChange:function onChange(event){return setCountryValue(event.target.value)}}):(0,jsx_runtime.jsx)(Typography.Z,{children:countryValue})]})]}),(0,jsx_runtime.jsxs)(Box.Z,{sx:styles.userData,children:[(0,jsx_runtime.jsx)(Typography.Z,{sx:styles.primaryText,children:"Description"}),isEditMode?(0,jsx_runtime.jsx)(Textarea.Z,{defaultValue:descriptionValue,onChange:function onChange(event){return setDescriptionValue(event.target.value)},minRows:"5"}):(0,jsx_runtime.jsx)(Typography.Z,{variant:"subtitle1",children:descriptionValue})]})]}),isUserAnAdult()&&(0,jsx_runtime.jsx)(AccordionActions.Z,{children:isEditMode?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(CancelOutlined.Z,{sx:styles.userActionIcons,style:{color:"#FF3D0A"},onClick:handleEditEnd}),(0,jsx_runtime.jsx)(CheckCircleOutlineOutlined.Z,{sx:styles.userActionIcons,style:{color:"#38B000"},onClick:function handleSubmit(){var celebrity={id:id,first:firstNameValue,last:lastNameValue,picture:profilePicture,dob:dobValue.toString(),country:countryValue,description:descriptionValue,gender:genderValue.value};onSubmit(celebrity),handleEditEnd()}})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(DeleteOutlined.Z,{sx:styles.userActionIcons,style:{color:"#FF3500"},onClick:function handleDelete(){onDelete(id)}}),(0,jsx_runtime.jsx)(EditOutlined.Z,{sx:styles.userActionIcons,style:{color:"#057DFF"},onClick:function handleEditStart(){isUserAnAdult()&&(setIsEditMode(!0),onEditModeToggle(!0))}})]})})]})})};try{AccordionAtom.displayName="AccordionAtom",AccordionAtom.__docgenInfo={description:"",displayName:"AccordionAtom",props:{isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!0,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},firstName:{defaultValue:null,description:"",name:"firstName",required:!0,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!0,type:{name:"string"}},profilePicture:{defaultValue:null,description:"",name:"profilePicture",required:!0,type:{name:"string"}},dob:{defaultValue:null,description:"",name:"dob",required:!0,type:{name:"string | Date"}},country:{defaultValue:null,description:"",name:"country",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},gender:{defaultValue:null,description:"",name:"gender",required:!0,type:{name:"Gender"}},isInEditMode:{defaultValue:{value:"false"},description:"",name:"isInEditMode",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"(isExpanded: string | false) => void"}},onSubmit:{defaultValue:{value:"() => {}"},description:"",name:"onSubmit",required:!1,type:{name:"(updatedData?: Celebrity) => void"}},onDelete:{defaultValue:{value:"() => {}"},description:"",name:"onDelete",required:!1,type:{name:"(idToBeDeleted?: number) => void"}},onEditModeToggle:{defaultValue:{value:"() => {}"},description:"",name:"onEditModeToggle",required:!1,type:{name:"(isInEditMode: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/atoms/accordion/accordion.tsx#AccordionAtom"]={docgenInfo:AccordionAtom.__docgenInfo,name:"AccordionAtom",path:"src/stories/components/atoms/accordion/accordion.tsx#AccordionAtom"})}catch(__react_docgen_typescript_loader_error){}try{accordion.displayName="accordion",accordion.__docgenInfo={description:"",displayName:"accordion",props:{isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!0,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},firstName:{defaultValue:null,description:"",name:"firstName",required:!0,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!0,type:{name:"string"}},profilePicture:{defaultValue:null,description:"",name:"profilePicture",required:!0,type:{name:"string"}},dob:{defaultValue:null,description:"",name:"dob",required:!0,type:{name:"string | Date"}},country:{defaultValue:null,description:"",name:"country",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},gender:{defaultValue:null,description:"",name:"gender",required:!0,type:{name:"Gender"}},isInEditMode:{defaultValue:{value:"false"},description:"",name:"isInEditMode",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"(isExpanded: string | false) => void"}},onSubmit:{defaultValue:{value:"() => {}"},description:"",name:"onSubmit",required:!1,type:{name:"(updatedData?: Celebrity) => void"}},onDelete:{defaultValue:{value:"() => {}"},description:"",name:"onDelete",required:!1,type:{name:"(idToBeDeleted?: number) => void"}},onEditModeToggle:{defaultValue:{value:"() => {}"},description:"",name:"onEditModeToggle",required:!1,type:{name:"(isInEditMode: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/atoms/accordion/accordion.tsx#accordion"]={docgenInfo:accordion.__docgenInfo,name:"accordion",path:"src/stories/components/atoms/accordion/accordion.tsx#accordion"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Dialog=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),DialogActions=__webpack_require__("./node_modules/@mui/material/DialogActions/DialogActions.js"),DialogContent=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),DialogContentText=__webpack_require__("./node_modules/@mui/material/DialogContentText/DialogContentText.js"),DialogBox=function DialogBox(_ref){var _ref$isOpen=_ref.isOpen,isOpen=void 0!==_ref$isOpen&&_ref$isOpen,_ref$onConfirm=_ref.onConfirm,onConfirm=void 0===_ref$onConfirm?function(){}:_ref$onConfirm,_ref$onCancel=_ref.onCancel,onCancel=void 0===_ref$onCancel?function(){}:_ref$onCancel,_useState=(0,react.useState)(isOpen),_useState2=(0,slicedToArray.Z)(_useState,2),isModalOpen=_useState2[0],toggleModal=_useState2[1];return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(Dialog.Z,{open:isModalOpen,onClose:toggleModal,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",fullWidth:!0,maxWidth:"xs",children:[(0,jsx_runtime.jsx)(DialogContent.Z,{children:(0,jsx_runtime.jsx)(DialogContentText.Z,{children:"Are you sure you want to delete?"})}),(0,jsx_runtime.jsxs)(DialogActions.Z,{children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"outlined",size:"medium",onClick:function handleCancel(){toggleModal(!1),onCancel()},children:"Cancel"}),(0,jsx_runtime.jsx)(Button.Z,{variant:"contained",size:"medium",color:"error",sx:{backgroundColor:"#FF3500",paddingX:"1rem"},onClick:function handleConfirm(){toggleModal(!1),onConfirm()},children:"Delete"})]})]})})};try{DialogBox.displayName="DialogBox",DialogBox.__docgenInfo={description:"",displayName:"DialogBox",props:{isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onConfirm:{defaultValue:{value:"() => {}"},description:"",name:"onConfirm",required:!1,type:{name:"() => void"}},onCancel:{defaultValue:{value:"() => {}"},description:"",name:"onCancel",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/atoms/dialogBox/dialogBox.tsx#DialogBox"]={docgenInfo:DialogBox.__docgenInfo,name:"DialogBox",path:"src/stories/components/atoms/dialogBox/dialogBox.tsx#DialogBox"})}catch(__react_docgen_typescript_loader_error){}try{dialogBox.displayName="dialogBox",dialogBox.__docgenInfo={description:"",displayName:"dialogBox",props:{isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onConfirm:{defaultValue:{value:"() => {}"},description:"",name:"onConfirm",required:!1,type:{name:"() => void"}},onCancel:{defaultValue:{value:"() => {}"},description:"",name:"onCancel",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/atoms/dialogBox/dialogBox.tsx#dialogBox"]={docgenInfo:dialogBox.__docgenInfo,name:"dialogBox",path:"src/stories/components/atoms/dialogBox/dialogBox.tsx#dialogBox"})}catch(__react_docgen_typescript_loader_error){}var AdapterDayjs=__webpack_require__("./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js"),DatePicker=__webpack_require__("./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js"),LocalizationProvider=__webpack_require__("./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js"),dayjs_min=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs_min_default=__webpack_require__.n(dayjs_min),DobPicker=function DobPicker(props){return(0,jsx_runtime.jsx)(LocalizationProvider._,{dateAdapter:AdapterDayjs.y,children:(0,jsx_runtime.jsx)(DatePicker.M,{format:"YYYY-MM-DD",defaultValue:dayjs_min_default()(props.defaultValue),onChange:function onChange(event){var _props$onChange;event&&(null===(_props$onChange=props.onChange)||void 0===_props$onChange||_props$onChange.call(props,event.toDate()))}})})};try{DobPicker.displayName="DobPicker",DobPicker.__docgenInfo={description:"",displayName:"DobPicker",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"string | Date"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: Date) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/atoms/dobPicker/dobPicker.tsx#DobPicker"]={docgenInfo:DobPicker.__docgenInfo,name:"DobPicker",path:"src/stories/components/atoms/dobPicker/dobPicker.tsx#DobPicker"})}catch(__react_docgen_typescript_loader_error){}try{dobPicker.displayName="dobPicker",dobPicker.__docgenInfo={description:"",displayName:"dobPicker",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"string | Date"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: Date) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/atoms/dobPicker/dobPicker.tsx#dobPicker"]={docgenInfo:dobPicker.__docgenInfo,name:"dobPicker",path:"src/stories/components/atoms/dobPicker/dobPicker.tsx#dobPicker"})}catch(__react_docgen_typescript_loader_error){}var Search=__webpack_require__("./node_modules/@mui/icons-material/Search.js"),InputAdornment=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),SearchBox=function SearchBox(props){return(0,jsx_runtime.jsx)(Box.Z,{children:(0,jsx_runtime.jsx)(TextField.Z,{label:"Search celebrities",variant:"outlined",defaultValue:props.defaultValue,onChange:function onChange(event){var _event$target;return props.onChange(null==event||null===(_event$target=event.target)||void 0===_event$target?void 0:_event$target.value)},fullWidth:!0,sx:{"& .MuiInputBase-root":{borderRadius:"1rem"}},placeholder:"Search celebrities",InputProps:{startAdornment:(0,jsx_runtime.jsx)(InputAdornment.Z,{position:"start",children:(0,jsx_runtime.jsx)(Search.Z,{})}),type:"search"}})})};try{SearchBox.displayName="SearchBox",SearchBox.__docgenInfo={description:"",displayName:"SearchBox",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/atoms/searchBox/searchBox.tsx#SearchBox"]={docgenInfo:SearchBox.__docgenInfo,name:"SearchBox",path:"src/stories/components/atoms/searchBox/searchBox.tsx#SearchBox"})}catch(__react_docgen_typescript_loader_error){}try{searchBox.displayName="searchBox",searchBox.__docgenInfo={description:"",displayName:"searchBox",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/atoms/searchBox/searchBox.tsx#searchBox"]={docgenInfo:searchBox.__docgenInfo,name:"searchBox",path:"src/stories/components/atoms/searchBox/searchBox.tsx#searchBox"})}catch(__react_docgen_typescript_loader_error){}}}]);