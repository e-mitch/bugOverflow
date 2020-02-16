require 'test_helper'

 class bugTest < ActiveSupport::TestCase

  def setup
     @bug = Bug.create(title: "Title", description: "Description")
  end
	
  test "bug must be valid" do
   	assert @bug.valid? 
  end
	
   test "title must be present" do
     @bug.title=""
     assert_not @bug.valid?
   end
   
   test "title must not be too short" do
     @bug.title ="aa"
     assert_not @bug.valid?
   end
   
   test "title must not be too long" do
     @bug.title = "a" * 81
     assert_not @bug.valid?
   end
   
   test "description must be present" do
     @bug.description = ""
     assert_not @bug.valid?
   end
   
   test "description must not be too short" do
     @bug.description = "a" * 81
     assert_not @bug.valid?
   end
   
   test "description must not be too long" do
     @bug.description = "a" * 81
     assert_not @bug.valid?
   end
   
  end
