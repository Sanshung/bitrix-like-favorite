# bitrix-like-favorite
bitrix like favorite

Скрипт для добавления в избраное в Bitrix по id элемента.

button.html пример кнопки

В битриксе добавить пользовательское поле UF_FAVORITES


Получить список избраных:
<?
$favoriteIds = array();
if(!$USER->IsAuthorized()) {
    $favoriteIds = unserialize($APPLICATION->get_cookie('favorites'));
}
else 
{
    $idUser = $USER->GetID();
    $rsUser = CUser::GetByID($idUser);
    $arUser = $rsUser->Fetch();
    $favoriteIds = unserialize($arUser['UF_FAVORITES']);
}
?>
