gdjs.ShopCode = {};
gdjs.ShopCode.GDBackgroundObjects1= [];
gdjs.ShopCode.GDBackgroundObjects2= [];
gdjs.ShopCode.GDSkinsSectionObjects1= [];
gdjs.ShopCode.GDSkinsSectionObjects2= [];
gdjs.ShopCode.GDBackSectionObjects1= [];
gdjs.ShopCode.GDBackSectionObjects2= [];
gdjs.ShopCode.GDSettingsSectionObjects1= [];
gdjs.ShopCode.GDSettingsSectionObjects2= [];
gdjs.ShopCode.GDCreditsSectionObjects1= [];
gdjs.ShopCode.GDCreditsSectionObjects2= [];
gdjs.ShopCode.GDCoinObjects1= [];
gdjs.ShopCode.GDCoinObjects2= [];
gdjs.ShopCode.GDAmountOfCoinsTextObjects1= [];
gdjs.ShopCode.GDAmountOfCoinsTextObjects2= [];

gdjs.ShopCode.conditionTrue_0 = {val:false};
gdjs.ShopCode.condition0IsTrue_0 = {val:false};
gdjs.ShopCode.condition1IsTrue_0 = {val:false};


gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDBackSectionObjects1Objects = Hashtable.newFrom({"BackSection": gdjs.ShopCode.GDBackSectionObjects1});gdjs.ShopCode.eventsList0x871c80 = function(runtimeScene, context) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame", false);
}}

}


}; //End of gdjs.ShopCode.eventsList0x871c80
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDSettingsSectionObjects1Objects = Hashtable.newFrom({"SettingsSection": gdjs.ShopCode.GDSettingsSectionObjects1});gdjs.ShopCode.eventsList0x872018 = function(runtimeScene, context) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


}; //End of gdjs.ShopCode.eventsList0x872018
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDCreditsSectionObjects1Objects = Hashtable.newFrom({"CreditsSection": gdjs.ShopCode.GDCreditsSectionObjects1});gdjs.ShopCode.eventsList0x8723b0 = function(runtimeScene, context) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}}

}


}; //End of gdjs.ShopCode.eventsList0x8723b0
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDSkinsSectionObjects1Objects = Hashtable.newFrom({"SkinsSection": gdjs.ShopCode.GDSkinsSectionObjects1});gdjs.ShopCode.eventsList0x872718 = function(runtimeScene, context) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Skins", false);
}}

}


}; //End of gdjs.ShopCode.eventsList0x872718
gdjs.ShopCode.eventsList0xac5d0 = function(runtimeScene, context) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
gdjs.ShopCode.GDAmountOfCoinsTextObjects1.createFrom(runtimeScene.getObjects("AmountOfCoinsText"));
{gdjs.evtTools.storage.readStringFromJSONFile("amountOfCoins", "", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.ShopCode.GDAmountOfCoinsTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDAmountOfCoinsTextObjects1[i].setString(": " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.ShopCode.GDBackSectionObjects1.createFrom(runtimeScene.getObjects("BackSection"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDBackSectionObjects1Objects, runtimeScene, true, false);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ShopCode.eventsList0x871c80(runtimeScene, context);} //End of subevents
}

}


{

gdjs.ShopCode.GDSettingsSectionObjects1.createFrom(runtimeScene.getObjects("SettingsSection"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDSettingsSectionObjects1Objects, runtimeScene, true, false);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ShopCode.eventsList0x872018(runtimeScene, context);} //End of subevents
}

}


{

gdjs.ShopCode.GDCreditsSectionObjects1.createFrom(runtimeScene.getObjects("CreditsSection"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDCreditsSectionObjects1Objects, runtimeScene, true, false);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ShopCode.eventsList0x8723b0(runtimeScene, context);} //End of subevents
}

}


{

gdjs.ShopCode.GDSkinsSectionObjects1.createFrom(runtimeScene.getObjects("SkinsSection"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDSkinsSectionObjects1Objects, runtimeScene, true, false);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ShopCode.eventsList0x872718(runtimeScene, context);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.ShopCode.eventsList0xac5d0


gdjs.ShopCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.ShopCode.GDBackgroundObjects1.length = 0;
gdjs.ShopCode.GDBackgroundObjects2.length = 0;
gdjs.ShopCode.GDSkinsSectionObjects1.length = 0;
gdjs.ShopCode.GDSkinsSectionObjects2.length = 0;
gdjs.ShopCode.GDBackSectionObjects1.length = 0;
gdjs.ShopCode.GDBackSectionObjects2.length = 0;
gdjs.ShopCode.GDSettingsSectionObjects1.length = 0;
gdjs.ShopCode.GDSettingsSectionObjects2.length = 0;
gdjs.ShopCode.GDCreditsSectionObjects1.length = 0;
gdjs.ShopCode.GDCreditsSectionObjects2.length = 0;
gdjs.ShopCode.GDCoinObjects1.length = 0;
gdjs.ShopCode.GDCoinObjects2.length = 0;
gdjs.ShopCode.GDAmountOfCoinsTextObjects1.length = 0;
gdjs.ShopCode.GDAmountOfCoinsTextObjects2.length = 0;

gdjs.ShopCode.eventsList0xac5d0(runtimeScene, context);return;
}
gdjs['ShopCode']= gdjs.ShopCode;
