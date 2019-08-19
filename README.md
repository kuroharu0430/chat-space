# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation　

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

##　groups_usersテーブル
|column|type|options|
|------|----|-------|
|user|references|null: false ,foreign_key: true|
|group|references|null: false ,foreign_key: true|

##　Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|column|type|options|
|------|----|-------|
|name|string|null: false, unique: true, index: true|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|


## Association
- has_many :groups ,through: :groups_users
- has_many :massages
- has_many :groups_users

## groupsテーブル
|column|type|options|
|------|----|-------|
|name|string|  |

## Association
- has_many :users ,through: :groups_users
- has_many :massages
- has_many :groups_users

## messagesテーブル
|column|type|options|
|------|----|-------|
|body|text|  |
|image|string|  |
|group|references|null: false, foreigner_key: true|
|user|references|null: false, foreigner_key: true|

## Association
- belongs_to :group
- belongs_to :user